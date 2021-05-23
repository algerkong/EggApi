/*
 Navicat MySQL Data Transfer

 Source Server         : photo
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : photo

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 23/05/2021 20:58:32
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for comments
-- ----------------------------
DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `dynamic_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  INDEX `dynamic_id`(`dynamic_id`) USING BTREE,
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`dynamic_id`) REFERENCES `dynamics` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comments
-- ----------------------------

-- ----------------------------
-- Table structure for dynamics
-- ----------------------------
DROP TABLE IF EXISTS `dynamics`;
CREATE TABLE `dynamics`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `status` int(11) NULL DEFAULT 0,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `tag_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  INDEX `tag_id`(`tag_id`) USING BTREE,
  CONSTRAINT `dynamics_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `dynamics_ibfk_2` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of dynamics
-- ----------------------------
INSERT INTO `dynamics` VALUES ('15def002-30e7-4d48-8373-ff341978b963', '今天好开心啊', '我又出去拍照啦啦啦啦啦啦', 2, '2021-05-23 15:08:11', '2021-05-23 15:08:11', 'b7c1340e-d7ae-41d5-b240-c2f070353278', 'e8294bf0-6989-429e-9b39-37d799e5ea7c');
INSERT INTO `dynamics` VALUES ('19051f6f-d2c3-474d-a09e-011650ded800', '来，看看“智慧”的一天怎么过', '“智慧”生活的一天是怎么样的？新华社记者来到天津多个智能场景亲身体验。你见或不见，智能新时代已经来临；你听或者不听，生活的格局已经重构。要想知道更多智能科技点亮智慧生活的案例，请跟他们到第五届世界智能大会现场，瞧一瞧，看一看！', 2, '2021-05-23 11:32:55', '2021-05-23 11:32:55', '4', '00151af8-e8d2-4dd1-ab1b-09fc331896e3');
INSERT INTO `dynamics` VALUES ('277bc91f-1db1-4af2-b44c-d1ae4ec30927', '希望这个夏天能像橘子汽水一样', '小九寨就在龙鳞霸后面、水色特像九寨而得名。', 0, '2021-05-22 11:35:19', '2021-05-22 11:35:19', '1', '00151af8-e8d2-4dd1-ab1b-09fc331896e3');
INSERT INTO `dynamics` VALUES ('387e724a-05c6-40e7-9ec4-1721948d4402', '不好不好不好不好不好11', 'aaaaaaaaaaaa', 1, '2021-05-22 15:46:48', '2021-05-22 15:46:48', '2', '00151af8-e8d2-4dd1-ab1b-09fc331896e3');
INSERT INTO `dynamics` VALUES ('710f5f32-c310-4a2d-8f65-c8bc19e5160e', '不好不好不好不好不好', 'aaaaaaaaaaaa', 2, '2021-05-22 12:04:00', '2021-05-22 12:04:00', '4', '00151af8-e8d2-4dd1-ab1b-09fc331896e3');
INSERT INTO `dynamics` VALUES ('79b1897e-c595-4967-9b51-0257fbcbd84d', '我是傻子', '我是傻子', 1, '2021-05-23 11:38:20', '2021-05-23 11:38:20', 'b7c1340e-d7ae-41d5-b240-c2f070353278', 'e8294bf0-6989-429e-9b39-37d799e5ea7c');
INSERT INTO `dynamics` VALUES ('8b65cdaa-4062-4392-b7a9-ebd31c58d0ea', 'aaaaaaaaa', 'aaaaaaaaaaaa', 1, '2021-05-22 16:22:27', '2021-05-22 16:22:27', '3', '00151af8-e8d2-4dd1-ab1b-09fc331896e3');
INSERT INTO `dynamics` VALUES ('abd7a8ef-1ff9-4118-9f97-c009bc330229', '不好不好不好不好不好', 'aaaaaaaaaaaa', 0, '2021-05-22 15:46:40', '2021-05-22 15:46:40', '5', 'e8294bf0-6989-429e-9b39-37d799e5ea7c');
INSERT INTO `dynamics` VALUES ('b6232ff3-4c5e-4393-a490-034acc52e497', '', '童年像追逐成长吹来的风， 轻轻地吹着梦想，慢慢升空。🪁  「澳门. Part 4」', 0, '2021-05-23 10:17:36', '2021-05-23 10:17:36', '1', 'd391d825-7bf7-4ac6-be23-f65ab14ef8db');
INSERT INTO `dynamics` VALUES ('d01a957e-45ed-4015-991e-468de6853c5f', 'element-ui select 默认选中', 'v-model的值为当前被选中的el-option的 label 属性值', 1, '2021-05-23 11:28:25', '2021-05-23 11:28:25', '3', 'd391d825-7bf7-4ac6-be23-f65ab14ef8db');
INSERT INTO `dynamics` VALUES ('f3b235b4-0265-44ab-b199-894257e78f2a', '不好不好不好不好不好11', 'hello World', 2, '2021-05-22 15:48:34', '2021-05-22 15:48:34', '1', '00151af8-e8d2-4dd1-ab1b-09fc331896e3');

-- ----------------------------
-- Table structure for imgs
-- ----------------------------
DROP TABLE IF EXISTS `imgs`;
CREATE TABLE `imgs`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `src` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  `comment_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `dynamic_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `order_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `orde_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE,
  INDEX `comment_id`(`comment_id`) USING BTREE,
  INDEX `dynamic_id`(`dynamic_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  INDEX `order_id`(`order_id`) USING BTREE,
  INDEX `orde_id`(`orde_id`) USING BTREE,
  CONSTRAINT `imgs_ibfk_1` FOREIGN KEY (`comment_id`) REFERENCES `comments` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `imgs_ibfk_2` FOREIGN KEY (`dynamic_id`) REFERENCES `dynamics` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `imgs_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `imgs_ibfk_4` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `imgs_ibfk_5` FOREIGN KEY (`orde_id`) REFERENCES `orders` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of imgs
-- ----------------------------
INSERT INTO `imgs` VALUES ('12c4e87b-f5a0-49d3-95ab-9ae03e0e1b61', '/public/uploads/1621676509106.jpg.jpg', '2021-05-22 17:41:49', '2021-05-22 17:41:49', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `imgs` VALUES ('1be4595f-e32a-4245-9a8c-3a023acfbc65', '/public/uploads/1621685893743.jpg', '2021-05-22 20:18:13', '2021-05-22 20:18:13', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `imgs` VALUES ('2b437f30-d1f0-48d6-8246-6338be760f60', '/public/uploads/1621676511709.jpg.jpg', '2021-05-22 17:41:51', '2021-05-22 17:41:51', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `imgs` VALUES ('2c7a3349-59fb-40fe-829f-9f4a501e34b7', '/public/uploads/1621605921667.jpg', '2021-05-21 22:05:21', '2021-05-21 22:05:21', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `imgs` VALUES ('38842f2a-fe79-4306-a5cd-65c928bdd9aa', '/public/uploads/1621740994201.jpg', '2021-05-23 11:36:34', '2021-05-23 11:36:34', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `imgs` VALUES ('411f4852-cf75-441b-adee-17b41296b1ad', '/public/uploads/1621685893564.jpg', '2021-05-22 20:18:13', '2021-05-22 20:18:13', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `imgs` VALUES ('45876a25-d993-49fd-8fa7-8e2bc8d5ae62', '/public/uploads/1621735885111.jpg', '2021-05-23 10:11:25', '2021-05-23 10:11:25', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `imgs` VALUES ('4e882829-f84d-4c1d-ad9f-580322ccf5b1', '/public/uploads/1621676507190.jpg.jpg', '2021-05-22 17:41:47', '2021-05-22 17:41:47', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `imgs` VALUES ('4eb4d951-81d5-492d-bff2-eaca47ea8484', '/public/uploads/1621676300313.jpg', '2021-05-22 17:38:20', '2021-05-22 17:38:20', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `imgs` VALUES ('520de4a0-e902-4e1e-bf79-eef15a5ee616', '/public/uploads/1621606716280.jpg', '2021-05-21 22:18:36', '2021-05-21 22:18:36', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `imgs` VALUES ('5448bd8d-9c5e-436f-9ced-751636455027', '/public/uploads/1621606408816.jpg', '2021-05-21 22:13:28', '2021-05-21 22:13:28', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `imgs` VALUES ('61645f2d-6aef-400b-823a-39518a8bdf8e', '/public/uploads/1621686090555.jpg', '2021-05-22 20:21:30', '2021-05-22 20:21:30', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `imgs` VALUES ('a0dc674f-09d1-4ded-a22f-899608e29ba0', '/public/uploads/1621757629152.jpg', '2021-05-23 16:13:49', '2021-05-23 16:13:49', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `imgs` VALUES ('a7f52a15-d8e9-4bfe-891c-5dbd9e35a13f', '/public/uploads/1621680517028.jpg', '2021-05-22 18:48:37', '2021-05-22 18:48:37', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `imgs` VALUES ('b2d4d8a6-be20-469b-a14c-b52a99de7d4f', '/public/uploads/1621676291664.jpg', '2021-05-22 17:38:11', '2021-05-22 17:38:11', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `imgs` VALUES ('b68aae10-6139-4b8b-9f10-20f188856972', '/public/uploads/1621686169101.jpg', '2021-05-22 20:22:49', '2021-05-22 20:22:49', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `imgs` VALUES ('b9f2f210-4b31-44cd-8291-69d9f3c6f05d', '/public/uploads/1621735877942.jpg', '2021-05-23 10:11:17', '2021-05-23 10:11:17', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `imgs` VALUES ('cd6c0e03-320b-46b4-9447-d469606a19fb', '/public/uploads/1621676510741.jpg.jpg', '2021-05-22 17:41:50', '2021-05-22 17:41:50', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `imgs` VALUES ('d00876ae-c165-41ed-a463-cf670cadae5b', '/public/uploads/1621676509888.jpg.jpg', '2021-05-22 17:41:49', '2021-05-22 17:41:49', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `imgs` VALUES ('d214607e-c21d-4eac-a232-dc0f10a4f774', '/public/uploads/1621605930638.jpg', '2021-05-21 22:05:30', '2021-05-21 22:05:30', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `imgs` VALUES ('d4439c4d-dd58-4c0c-be82-d03b37eab145', '/public/uploads/1621662029206.jpg', '2021-05-22 13:40:29', '2021-05-22 13:40:29', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `imgs` VALUES ('d628ba13-c264-46f5-900f-1c597dae14db', '/public/uploads/1621735854126.jpg', '2021-05-23 10:10:54', '2021-05-23 10:10:54', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `imgs` VALUES ('d698ad74-692a-4811-bdd3-2807fa4cb946', '/public/uploads/1621686169085.jpg', '2021-05-22 20:22:49', '2021-05-22 20:22:49', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `imgs` VALUES ('f34f89fb-e914-4a7c-bda2-f534b66d972e', '/public/uploads/1621735892948.jpg', '2021-05-23 10:11:32', '2021-05-23 10:11:32', NULL, NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `tag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `is` int(11) NULL DEFAULT NULL,
  `status` int(11) NULL DEFAULT 0,
  `price` float NULL DEFAULT NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES ('101a9386-4097-4ab5-8196-567ed5218bff', '王佳浩', '不要钱', NULL, NULL, 0, 0, '2021-05-19 20:38:45', '2021-05-19 20:38:45', NULL);
INSERT INTO `orders` VALUES ('5cb76b37-e872-4c1a-8e1f-00d399e34ba0', '卖张泽伟', 'aaaaaaaaaaaa', '卖人', NULL, 0, NULL, '2021-05-22 19:49:52', '2021-05-22 19:49:52', '1');
INSERT INTO `orders` VALUES ('6ff302e1-5186-4085-81c6-032b728ce33c', '卖张泽伟', 'aaaaaaaaaaaa', '卖人', NULL, 0, NULL, '2021-05-22 19:49:51', '2021-05-22 19:49:51', '1');
INSERT INTO `orders` VALUES ('a721d2d7-73b4-47f1-acf9-6d9419956e5c', '卖张泽伟', 'aaaaaaaaaaaa', '卖人', NULL, 0, NULL, '2021-05-22 19:49:49', '2021-05-22 19:49:49', '1');
INSERT INTO `orders` VALUES ('a91d3193-3854-4706-92a1-79d664bd0c70', '王佳浩', '不要钱', NULL, NULL, 0, 0, '2021-05-19 20:38:33', '2021-05-19 20:38:33', NULL);
INSERT INTO `orders` VALUES ('c5b12855-a3d1-4477-b2b2-d1be05995581', '123456', 'aaaaaaaaaaaa', '卖人', NULL, 0, NULL, '2021-05-22 19:50:03', '2021-05-22 19:50:03', '1');

-- ----------------------------
-- Table structure for praises
-- ----------------------------
DROP TABLE IF EXISTS `praises`;
CREATE TABLE `praises`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  `dynamic_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE,
  INDEX `dynamic_id`(`dynamic_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `praises_ibfk_1` FOREIGN KEY (`dynamic_id`) REFERENCES `dynamics` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `praises_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of praises
-- ----------------------------

-- ----------------------------
-- Table structure for receive_orders
-- ----------------------------
DROP TABLE IF EXISTS `receive_orders`;
CREATE TABLE `receive_orders`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  `order_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE,
  INDEX `order_id`(`order_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `receive_orders_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `receive_orders_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of receive_orders
-- ----------------------------
INSERT INTO `receive_orders` VALUES ('15641564', '2021-05-22 19:57:59', '2021-05-22 19:58:03', '6ff302e1-5186-4085-81c6-032b728ce33c', '1');
INSERT INTO `receive_orders` VALUES ('54353', '2021-05-19 20:42:44', '2021-05-19 20:42:46', '101a9386-4097-4ab5-8196-567ed5218bff', NULL);

-- ----------------------------
-- Table structure for tags
-- ----------------------------
DROP TABLE IF EXISTS `tags`;
CREATE TABLE `tags`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tags
-- ----------------------------
INSERT INTO `tags` VALUES ('00151af8-e8d2-4dd1-ab1b-09fc331896e3', '闲聊', '2021-05-22 11:27:43', '2021-05-22 11:27:43');
INSERT INTO `tags` VALUES ('49442762-f9e1-4992-9d6f-32236acfd6c9', '夜话', '2021-05-22 11:28:04', '2021-05-22 12:51:07');
INSERT INTO `tags` VALUES ('c4e1386e-b9e1-4e49-9158-9af32cb69377', '夜11话', '2021-05-22 13:36:15', '2021-05-22 13:36:15');
INSERT INTO `tags` VALUES ('d391d825-7bf7-4ac6-be23-f65ab14ef8db', '夜11话1', '2021-05-22 13:39:21', '2021-05-22 13:39:21');
INSERT INTO `tags` VALUES ('e8294bf0-6989-429e-9b39-37d799e5ea7c', '设备', '2021-05-22 11:27:58', '2021-05-22 11:27:58');
INSERT INTO `tags` VALUES ('f29566f3-f25d-4ee0-afe6-6e4e60766003', '教程', '2021-05-22 11:27:49', '2021-05-22 11:27:49');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `age` int(11) NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `nick_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `gender` int(11) NULL DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'admin', 19, '123456', '刘俊杰', 1, '/public/uploads/1621662029206.jpg', '2021-05-22 13:40:08', '2021-05-22 13:40:30');
INSERT INTO `users` VALUES ('2', '5545656377665463285654563546', 19, '123456', '张三', 1, '/public/uploads/1621735885111.jpg', '2021-05-22 13:37:48', '2021-05-23 10:11:26');
INSERT INTO `users` VALUES ('3', 'admin1', 19, '123456', '李四', 1, '/public/uploads/1621735877942.jpg', '2021-05-22 13:40:56', '2021-05-23 10:11:19');
INSERT INTO `users` VALUES ('4', '4554', 19, '123456', '王五', 1, '/public/uploads/1621735892948.jpg', '2021-05-22 13:37:57', '2021-05-23 10:11:34');
INSERT INTO `users` VALUES ('5', '554565637766546328563546', 19, '123456', '赵六', 1, '/public/uploads/1621735854126.jpg', '2021-05-22 13:37:44', '2021-05-23 10:10:55');
INSERT INTO `users` VALUES ('b7c1340e-d7ae-41d5-b240-c2f070353278', 'zzw', NULL, '123456', '张泽伟', 1, '/public/uploads/1621740994201.jpg', '2021-05-23 11:36:36', '2021-05-23 11:36:36');

SET FOREIGN_KEY_CHECKS = 1;
