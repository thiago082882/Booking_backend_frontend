import jwt  from "jsonwebtoken";
import {createError} from './../utils/error.js'

export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401,"Você não foi autenticado"))
    }
    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err) return next(createError(401,"UToken  não é inválido!!"));
        req.user = user;
        next()
    });
}

export const verifyUser = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            return next(createError(403,"Não esta autorizado para realizar essa solicitação"));

        }
    });
}

export const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.isAdmin){
            next();
        }else{
            return next(createError(403,"Não esta autorizado para realizar essa solicitação"));

        }
    });
}