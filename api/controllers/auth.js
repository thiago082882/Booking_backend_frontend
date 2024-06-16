import User from "../models/User.js";
import bcrypt from "bcryptjs"
import {createError} from "./../utils/error.js"
import jwt from "jsonwebtoken"

export const register = async (req, res, next) => {
    try {
       const salt = bcrypt.genSaltSync(10); // true
        const pass = bcrypt.hashSync(req.body.password, salt); // false
        const newUser = new User({
          userName:req.body.userName,
          email:req.body.email,
          password:pass
        });
        const user = await newUser.save();
        res.status(201).json(user);
      
    } catch (err) {
        next(err);
    }
};

export const login = async (req, res, next) => {
    try {
      const user = await User.findOne({userName:req.body.userName});
      if(!user) return next(createError(404,"Usuario não existe"))
      const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password);
      if(!isPasswordCorrect) return next(createError(400,"Dados de acesso incorreto"))

      const token = jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT)
      const {password,isAdmin,...other} = user._doc
      res
      .cookie("access_token",token,{
        httpOnly:true,
      })
      .status(200).json({...other});
      
    } catch (err) {
        next(err);
    }
};
