module.exports = {
  environment: process.env.NODE_ENV || "development",
  port: process.env.PORT || 8080,
  db: {
    username: process.env.DB_USERNAME || "nyc_dmv_permit_app",
    password: process.env.DB_PASSWORD || "AJ5eY98mAJEYUduL",
    database: process.env.DB_DATABASE || "nyc_dmv_permit_db",
    host: process.env.DB_HOST || "localhost",
  }
};