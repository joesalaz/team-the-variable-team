'use strict';
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
    const Emp_Users = sequelize.define(
        'Emp_Users',
        {
            ID: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            companyName: DataTypes.STRING,
            companyWeb: DataTypes.STRING,
            companyEmail: DataTypes.STRING,
            companyContact: DataTypes.STRING,
            compContactNum: DataTypes.STRING,
            compIndustry: DataTypes.STRING,
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            avatar: DataTypes.TEXT
        },
        {
            timestamps: false,
            instanceMethods: {
                validPassword: (password) => {
                    return bcrypt.compare(password, this.password);
                }
            }
        }
    );
    Emp_Users.prototype.validPassword = function validPassword(password) {
        return bcrypt.compare(password, this.password);
    }
    Emp_Users.associate = function(models) {
        // associations can be defined here
        Emp_Users.hasMany(models.Emp_JobPosts, {
            as: 'jobPosts',
            foreignKey: 'EmpJobCreatedById',
            sourceKey: 'ID'
        });
    };
    Emp_Users.beforeCreate((user, options) => {
        return bcrypt.hash(user.password, 10)
        .then(hash => {
            user.password = hash;
        })
        .catch(err => { 
            throw new Error(); 
        });
    });
    return Emp_Users;
};