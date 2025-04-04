// seeders/createSystemConfig.js

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('system_config', [
        {
          config_key: 'email_host',
          config_value: 'smtp.sendgrid.net',
        },
        {
          config_key: 'email_port',
          config_value: '587',
        },
        {
          config_key: 'email_username',
          config_value: 'your_sendgrid_username',
        },
        {
          config_key: 'email_password',
          config_value: 'your_sendgrid_password',
        },
        {
          config_key: 'aws_access_key_id',
          config_value: 'your_aws_access_key_id',
        },
        {
          config_key: 'aws_secret_access_key',
          config_value: 'your_aws_secret_access_key',
        },
        {
          config_key: 'aws_bucket_name',
          config_value: 'your_aws_bucket_name',
        },
        {
          config_key: 'aws_region',
          config_value: 'us-west-2',
        },
        {
          config_key: 'stripe_secret_key',
          config_value: 'your_stripe_secret_key',
        },
        {
          config_key: 'razorpay_key_id',
          config_value: 'your_razorpay_key_id',
        },
        {
          config_key: 'payu_merchant_key',
          config_value: 'your_payu_merchant_key',
        },
        {
          config_key: 'payu_merchant_salt',
          config_value: 'your_payu_merchant_salt',
        },
      ]);
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('system_config', null, {});
    },
  };
  