import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // Carga el .env globalmente
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Conexión dinámica a MySQL usando variables de entorno
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_DATABASE'),
        autoLoadEntities: true, // carga automáticamente las entidades registradas
        synchronize: true,      // crea/actualiza tablas automáticamente (solo desarrollo)
      }),
    }),
  ],
})
export class AppModule {}