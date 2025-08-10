'use strict';
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
    const Std_Users = sequelize.define(
        'Std_Users',
        {
            studentId: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            stdEmail: DataTypes.STRING,
            stdContactNum: DataTypes.STRING,
            resumeOnFile: {
                type: DataTypes.BOOLEAN,
                default: false,
            },
            major: DataTypes.STRING,
            coursesEnrolled: DataTypes.STRING,
            coursesCompleted: DataTypes.STRING,
            stdExperience: DataTypes.STRING,
            stdGPA: DataTypes.STRING,
            stdAwards: DataTypes.STRING,
            stdScholarships: DataTypes.STRING,
            stdSkills: DataTypes.STRING,
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            avatar: DataTypes.TEXT,
            github: DataTypes.STRING,
            linkedin: DataTypes.STRING,
            facebook: DataTypes.STRING
        },
        {
            timestamps: false
        }
    );

    Std_Users.prototype.validPassword = function validPassword(password) {
        return bcrypt.compare(password, this.password);
    }

    Std_Users.associate = function(models) {
        // associations can be defined here
        Std_Users.hasMany(models.Std_JobPosts, {
            as: 'jobPosts',
            foreignKey: 'StdJobCreatedById',
            sourceKey: 'studentId'
        });
    };
    
    Std_Users.beforeCreate((user, options) => {
        return bcrypt.hash(user.password, 10)
        .then(hash => {
            user.password = hash;
        })
        .catch(err => { 
            throw new Error(); 
        });
    });
    return Std_Users;
};
