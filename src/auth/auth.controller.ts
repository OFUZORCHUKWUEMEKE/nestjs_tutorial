import { Controller, Post, Req,Body } from "@nestjs/common";
import { Request } from "express";
import { AuthDto } from "src/dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
   constructor(private authService:AuthService){}
   @Post('signup')
   Signup(@Body() dto:AuthDto){
      this.authService.Signup(dto)
   }
   @Post('signin')
   Signin(dto:AuthDto){
      this.authService.Signin(dto); 
   }
}