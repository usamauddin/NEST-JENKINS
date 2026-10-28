import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { PrismaModule } from './prisma/prisma.module';
// import { UsersModule } from './users/users.module';
// import { NotificationsModule } from './notifications/notifications.module';
// import { EmailModule } from './email/email.module';
import { JwtModule } from '@nestjs/jwt';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MailerModule } from '@nestjs-modules/mailer';
// import { FileUploadModule } from './file-upload/file-upload.module';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.zoho.com',
        port: 465,
        // port: 587,
        secure: true, // use SSL
        auth: {
          user: process.env.USER_NAME,
          pass: process.env.PASSWORD,
        },
      },
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
    }),
    EventEmitterModule.forRoot(),
    // PrismaModule,
    // UsersModule,
    // NotificationsModule,
    // EmailModule,
    // FileUploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
