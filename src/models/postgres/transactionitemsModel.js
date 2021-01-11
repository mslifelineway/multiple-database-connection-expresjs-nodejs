const Sequelize = require('Sequelize');
// const { almondHouseDbConfig } = require('../../../databases/config');
// const { postgresDbConnection } = require('../../../databases/postgres.connection');
// let db = postgresDbConnection(almondHouseDbConfig);
// Sequelize = db.Sequelize;
exports.transcationItems = (db) => db.define('transcation_items', {
  users_id: { type: Sequelize.INTEGER, notNull: true },
  final_transcation_id: { type: Sequelize.INTEGER, notNull: true },
  product_id: { type: Sequelize.STRING, notNull: true },
  product_slug: { type: Sequelize.STRING, notNull: true },
  product_name: { type: Sequelize.STRING, notNull: true },
  product_uom: { type: Sequelize.STRING, notNull: true },
  product_price: { type: Sequelize.NUMERIC(8, 2), notNull: true },
  ordered_quantity: { type: Sequelize.REAL, notNull: true },
  discount_percentage: { type: Sequelize.INTEGER },
  thumbnail_product_image: { type: Sequelize.STRING, notNull: true },
  master_status_id: { type: Sequelize.INTEGER },
  master_status_name: { type: Sequelize.STRING },
  discount_amount: { type: Sequelize.NUMERIC(8, 2) },
  price_after_discount: { type: Sequelize.NUMERIC(8, 2), notNull: true },
  tax_total: { type: Sequelize.NUMERIC(8, 2), notNull: true },
  total_price: { type: Sequelize.NUMERIC(8, 2), notNull: true },
  expected_delivery_date: { type: Sequelize.DATE },
  created_at: { type: Sequelize.DATE },
  cancel_reason :{ type: Sequelize.STRING },
  tax_setup_id: { type: Sequelize.STRING, notNull: true },
  hsn_code: { type: Sequelize.STRING, notNull: true },
  short_description : {type: Sequelize.STRING},
  productgiftbox_id :{type: Sequelize.STRING},
  productgiftbox_price: { type: Sequelize.NUMERIC(8, 2), defaultValue: 0.00 },
  user_product_gift_box_id :{type: Sequelize.INTEGER},
  weight_in_kgs :{type: Sequelize.STRING},
  category_name :{type: Sequelize.STRING},
  category_slug :{type: Sequelize.STRING},
  product_selling_price: { type: Sequelize.NUMERIC(8, 2), notNull: true },
}, {
  tableName: 'transcation_items',
  underscored: true // to allows underscores in column names
});
