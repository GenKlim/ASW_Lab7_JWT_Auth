import { Injectable } from '@nestjs/common';
import { jwtConstants } from './auth/constants';

@Injectable()
export class AppService {
  getHello(): string {
    return "<h3>Hello World!</h3>Демиденко В.С.<br/>Идрисзода М.М.<br/>Исроилзода Б.И.<br/>Климанов Г.И.<br/>Мешков Г.И.<br/>Морозов Р.А."/*"<br/>SecretKey: " + jwtConstants.secret*/;
  }
}