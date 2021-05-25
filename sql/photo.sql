/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 50734
 Source Host           : localhost:3306
 Source Schema         : photo

 Target Server Type    : MySQL
 Target Server Version : 50734
 File Encoding         : 65001

 Date: 25/05/2021 17:35:00
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
INSERT INTO `comments` VALUES ('014c3170-8654-4ba0-894c-06b9670ffa53', 'hello hello hello', '2021-05-25 15:36:00', '2021-05-25 15:36:00', '1', 'f3b235b4-0265-44ab-b199-894257e78f2a');
INSERT INTO `comments` VALUES ('10e8ecc1-a096-4111-a257-62c929de9a06', 'hello hello hello', '2021-05-25 15:29:52', '2021-05-25 15:29:52', '1', '7aff5951-c16c-433f-ab85-26557222df70');
INSERT INTO `comments` VALUES ('16a7bbc8-b15c-4f65-8d81-536df694d200', 'hello hello hello', '2021-05-25 15:29:29', '2021-05-25 15:29:29', '1', '15def002-30e7-4d48-8373-ff341978b963');
INSERT INTO `comments` VALUES ('177409c2-969d-4d32-8fc2-d4c59845b859', 'hello hello hello', '2021-05-25 15:29:52', '2021-05-25 15:29:52', '1', '7aff5951-c16c-433f-ab85-26557222df70');
INSERT INTO `comments` VALUES ('1a217fa3-db4d-4e89-b334-9402c5b3b407', 'hello hello hello', '2021-05-25 15:29:31', '2021-05-25 15:29:31', '1', '15def002-30e7-4d48-8373-ff341978b963');
INSERT INTO `comments` VALUES ('1f060222-6ab0-4336-be19-61bdf8e786c5', 'hello hello hello', '2021-05-25 15:30:02', '2021-05-25 15:30:02', '1', 'b6232ff3-4c5e-4393-a490-034acc52e497');
INSERT INTO `comments` VALUES ('1f4b394d-209e-494a-9c5d-e9f752a7ab19', 'hello hello hello', '2021-05-25 15:30:02', '2021-05-25 15:30:02', '1', 'b6232ff3-4c5e-4393-a490-034acc52e497');
INSERT INTO `comments` VALUES ('2a5ddc28-21a4-4dfe-8873-8822ecb0be2a', 'hello hello hello', '2021-05-25 15:30:03', '2021-05-25 15:30:03', '1', 'b6232ff3-4c5e-4393-a490-034acc52e497');
INSERT INTO `comments` VALUES ('325ee9c6-d3b5-41a0-b1e0-42a411c36d7c', 'hello hello hello', '2021-05-25 15:30:11', '2021-05-25 15:30:11', '1', 'f3b235b4-0265-44ab-b199-894257e78f2a');
INSERT INTO `comments` VALUES ('383ea812-e4d7-440f-b60e-d024adc1c7aa', 'hello hello hello', '2021-05-25 15:29:51', '2021-05-25 15:29:51', '1', '7aff5951-c16c-433f-ab85-26557222df70');
INSERT INTO `comments` VALUES ('5243075a-849f-424c-ad0c-8c048af24b20', 'hello hello hello', '2021-05-25 15:29:43', '2021-05-25 15:29:43', '1', '19051f6f-d2c3-474d-a09e-011650ded800');
INSERT INTO `comments` VALUES ('6388756c-54af-44ec-bce4-2162df9edfd2', 'hello hello hello', '2021-05-25 15:30:12', '2021-05-25 15:30:12', '1', 'f3b235b4-0265-44ab-b199-894257e78f2a');
INSERT INTO `comments` VALUES ('65d29658-24b9-4c09-93f9-742e9be47eba', 'hello hello hello', '2021-05-25 15:30:01', '2021-05-25 15:30:01', '1', 'b6232ff3-4c5e-4393-a490-034acc52e497');
INSERT INTO `comments` VALUES ('6fb8f95b-28bf-4b9e-9263-2b680fde2247', 'hello hello hello', '2021-05-25 15:29:40', '2021-05-25 15:29:40', '1', '19051f6f-d2c3-474d-a09e-011650ded800');
INSERT INTO `comments` VALUES ('808c7e03-d480-4605-83bb-ae1ff8236635', 'hello hello hello', '2021-05-25 15:29:29', '2021-05-25 15:29:29', '1', '15def002-30e7-4d48-8373-ff341978b963');
INSERT INTO `comments` VALUES ('9e74d4f7-8904-4018-b1a1-1024a6d14b73', 'hello hello hello', '2021-05-25 15:30:11', '2021-05-25 15:30:11', '1', 'f3b235b4-0265-44ab-b199-894257e78f2a');
INSERT INTO `comments` VALUES ('aa1178a7-b427-43aa-ae43-177cbec2cc33', 'hello hello hello', '2021-05-25 15:30:03', '2021-05-25 15:30:03', '1', 'b6232ff3-4c5e-4393-a490-034acc52e497');
INSERT INTO `comments` VALUES ('ab4561fc-4f0f-4584-9c89-ef1a3fc007fc', 'hello hello hello', '2021-05-25 15:29:28', '2021-05-25 15:29:28', '1', '15def002-30e7-4d48-8373-ff341978b963');
INSERT INTO `comments` VALUES ('ab7c4db3-313d-4939-a3bc-7907f99c2aeb', 'hello hello hello', '2021-05-25 15:30:11', '2021-05-25 15:30:11', '1', 'f3b235b4-0265-44ab-b199-894257e78f2a');
INSERT INTO `comments` VALUES ('c37fac57-e00e-4abb-92dd-ccb0d299666e', 'hello hello hello', '2021-05-25 15:29:53', '2021-05-25 15:29:53', '1', '7aff5951-c16c-433f-ab85-26557222df70');
INSERT INTO `comments` VALUES ('cabc19cc-6104-4bab-93cd-14d89f74c5e6', 'hello hello hello', '2021-05-25 15:29:44', '2021-05-25 15:29:44', '1', '19051f6f-d2c3-474d-a09e-011650ded800');
INSERT INTO `comments` VALUES ('cd880adf-d518-435f-b3b1-0931b4447e2f', 'hello hello hello', '2021-05-25 15:29:53', '2021-05-25 15:29:53', '1', '7aff5951-c16c-433f-ab85-26557222df70');
INSERT INTO `comments` VALUES ('daa5f66f-1fb2-4f6a-9523-57fe3d9b9ad3', 'hello hello hello', '2021-05-25 15:29:52', '2021-05-25 15:29:52', '1', '7aff5951-c16c-433f-ab85-26557222df70');
INSERT INTO `comments` VALUES ('dd723d4a-6840-48b8-ae95-2d0ee234f76b', 'hello hello hello', '2021-05-25 15:29:44', '2021-05-25 15:29:44', '1', '19051f6f-d2c3-474d-a09e-011650ded800');
INSERT INTO `comments` VALUES ('e5397e57-ed5a-45c5-98c6-0c34166c01be', 'hello hello hello', '2021-05-25 15:29:30', '2021-05-25 15:29:30', '1', '15def002-30e7-4d48-8373-ff341978b963');
INSERT INTO `comments` VALUES ('e9b9d765-0402-4faf-9234-d5d45d6cab88', 'hello hello hello', '2021-05-25 15:29:30', '2021-05-25 15:29:30', '1', '15def002-30e7-4d48-8373-ff341978b963');
INSERT INTO `comments` VALUES ('f04e58c9-c85f-47fe-9999-9de88d332a2f', 'hello hello hello', '2021-05-25 15:30:12', '2021-05-25 15:30:12', '1', 'f3b235b4-0265-44ab-b199-894257e78f2a');
INSERT INTO `comments` VALUES ('f4512cbd-85d5-40d6-844b-653ab19b14dd', 'hello hello hello', '2021-05-25 15:29:43', '2021-05-25 15:29:43', '1', '19051f6f-d2c3-474d-a09e-011650ded800');
INSERT INTO `comments` VALUES ('f7b2d6ff-5806-4c06-bc4e-59ee1224d62f', 'hello hello hello', '2021-05-25 15:29:40', '2021-05-25 15:29:40', '1', '19051f6f-d2c3-474d-a09e-011650ded800');
INSERT INTO `comments` VALUES ('fbb2faa9-09e9-4569-a094-86faed893ab6', 'hello hello hello', '2021-05-25 15:30:12', '2021-05-25 15:30:12', '1', 'f3b235b4-0265-44ab-b199-894257e78f2a');

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
INSERT INTO `dynamics` VALUES ('504e134a-f4a4-4b78-8596-df6452148a4d', '123456', '123456', 2, '2021-05-25 10:31:44', '2021-05-25 10:31:44', '2', '00151af8-e8d2-4dd1-ab1b-09fc331896e3');
INSERT INTO `dynamics` VALUES ('710f5f32-c310-4a2d-8f65-c8bc19e5160e', '不好不好不好不好不好', 'aaaaaaaaaaaa', 2, '2021-05-22 12:04:00', '2021-05-22 12:04:00', '4', '00151af8-e8d2-4dd1-ab1b-09fc331896e3');
INSERT INTO `dynamics` VALUES ('79b1897e-c595-4967-9b51-0257fbcbd84d', '我是傻子', '我是傻子', 1, '2021-05-23 11:38:20', '2021-05-23 11:38:20', 'b7c1340e-d7ae-41d5-b240-c2f070353278', 'e8294bf0-6989-429e-9b39-37d799e5ea7c');
INSERT INTO `dynamics` VALUES ('7aff5951-c16c-433f-ab85-26557222df70', '反对撒范德萨分', '阿凡达啊', 2, '2021-05-25 10:32:04', '2021-05-25 10:32:04', '2', '49442762-f9e1-4992-9d6f-32236acfd6c9');
INSERT INTO `dynamics` VALUES ('8a29511c-65b3-451d-9d9e-298410766c97', '哈哈哈哈哈哈', '哈哈哈哈哈哈哈哈哈哈', 2, '2021-05-25 12:18:13', '2021-05-25 12:18:13', '884f7461-7385-4129-b4f0-52281147a47d', 'f29566f3-f25d-4ee0-afe6-6e4e60766003');
INSERT INTO `dynamics` VALUES ('8b65cdaa-4062-4392-b7a9-ebd31c58d0ea', 'aaaaaaaaa', 'aaaaaaaaaaaa', 1, '2021-05-22 16:22:27', '2021-05-22 16:22:27', '3', '00151af8-e8d2-4dd1-ab1b-09fc331896e3');
INSERT INTO `dynamics` VALUES ('abd7a8ef-1ff9-4118-9f97-c009bc330229', '不好不好不好不好不好', 'aaaaaaaaaaaa', 0, '2021-05-22 15:46:40', '2021-05-22 15:46:40', '5', 'e8294bf0-6989-429e-9b39-37d799e5ea7c');
INSERT INTO `dynamics` VALUES ('b6232ff3-4c5e-4393-a490-034acc52e497', '童年像追逐成长吹来的风， 轻轻地吹着梦想，慢慢升空。🪁  「澳门. Part 4」', '童年像追逐成长吹来的风， 轻轻地吹着梦想，慢慢升空。🪁  「澳门. Part 4」', 0, '2021-05-23 10:17:36', '2021-05-25 09:04:39', '1', 'd391d825-7bf7-4ac6-be23-f65ab14ef8db');
INSERT INTO `dynamics` VALUES ('b94b41fa-616d-4485-9bc9-6ea80eec7f59', '啊啊啊啊啊啊啊啊啊', '安安安安安安啊', 1, '2021-05-25 13:58:59', '2021-05-25 13:58:59', '7f0c913b-5f25-44a0-a42a-735d4430d2a5', 'e8294bf0-6989-429e-9b39-37d799e5ea7c');
INSERT INTO `dynamics` VALUES ('d01a957e-45ed-4015-991e-468de6853c5f', 'element-ui select 默认选中', 'v-model的值为当前被选中的el-option的 label 属性值', 1, '2021-05-23 11:28:25', '2021-05-23 11:28:25', '3', 'd391d825-7bf7-4ac6-be23-f65ab14ef8db');
INSERT INTO `dynamics` VALUES ('e4e1b036-c592-46fb-b51d-e42895141540', '的分撒范德萨分', '范德萨分撒', 2, '2021-05-25 10:31:54', '2021-05-25 10:31:54', '2', 'c4e1386e-b9e1-4e49-9158-9af32cb69377');
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
INSERT INTO `imgs` VALUES ('0be854ff-2129-4bb6-8eee-ae5d5281d230', '/public/uploads/1621932866270.jpg', '2021-05-25 16:54:26', '2021-05-25 16:54:26', NULL, NULL, NULL, NULL, NULL);
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
INSERT INTO `imgs` VALUES ('ce388c10-86a1-4e93-92ef-f8f84f801825', '/public/uploads/1621817806146.jpg', '2021-05-24 08:56:46', '2021-05-24 08:56:46', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `imgs` VALUES ('d214607e-c21d-4eac-a232-dc0f10a4f774', '/public/uploads/1621605930638.jpg', '2021-05-21 22:05:30', '2021-05-21 22:05:30', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `imgs` VALUES ('d4439c4d-dd58-4c0c-be82-d03b37eab145', '/public/uploads/1621662029206.jpg', '2021-05-22 13:40:29', '2021-05-22 13:40:29', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `imgs` VALUES ('d628ba13-c264-46f5-900f-1c597dae14db', '/public/uploads/1621735854126.jpg', '2021-05-23 10:10:54', '2021-05-23 10:10:54', NULL, NULL, NULL, NULL, NULL);
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
INSERT INTO `praises` VALUES ('09f00433-bbcd-42f3-be58-360060417fee', '2021-05-25 15:34:49', '2021-05-25 15:34:49', '15def002-30e7-4d48-8373-ff341978b963', '3');
INSERT INTO `praises` VALUES ('32fc0d24-1aa2-43c7-ab2f-da0aba550047', '2021-05-25 15:35:37', '2021-05-25 15:35:37', '7aff5951-c16c-433f-ab85-26557222df70', '2');
INSERT INTO `praises` VALUES ('40509331-2105-4ed2-8afb-b9217d8ec12f', '2021-05-25 15:35:39', '2021-05-25 15:35:39', '7aff5951-c16c-433f-ab85-26557222df70', '3');
INSERT INTO `praises` VALUES ('73d3dbfd-1b56-48ef-9d65-1e2b16e3a6af', '2021-05-25 15:34:28', '2021-05-25 15:34:28', '15def002-30e7-4d48-8373-ff341978b963', '1');
INSERT INTO `praises` VALUES ('8e9558a2-3169-4c0f-918c-72d034523ce6', '2021-05-25 15:34:52', '2021-05-25 15:34:52', '15def002-30e7-4d48-8373-ff341978b963', '4');
INSERT INTO `praises` VALUES ('bfe0443a-0f5d-434c-8a8d-e741c5b095c4', '2021-05-25 15:35:29', '2021-05-25 15:35:29', '7aff5951-c16c-433f-ab85-26557222df70', '06dd0fa1-08e2-4d3e-8933-a162fdf02407');
INSERT INTO `praises` VALUES ('c96fff1d-2848-4b4c-89be-5f9c80c97ee2', '2021-05-25 15:35:42', '2021-05-25 15:35:42', '7aff5951-c16c-433f-ab85-26557222df70', '4');
INSERT INTO `praises` VALUES ('d5c7743c-b492-4e80-a59f-1cd7fa315b83', '2021-05-25 15:35:10', '2021-05-25 15:35:10', '15def002-30e7-4d48-8373-ff341978b963', '06dd0fa1-08e2-4d3e-8933-a162fdf02407');
INSERT INTO `praises` VALUES ('d672f07d-139a-46f4-9f8b-25e680b4ec4b', '2021-05-25 15:34:55', '2021-05-25 15:34:55', '15def002-30e7-4d48-8373-ff341978b963', '5');
INSERT INTO `praises` VALUES ('e0459f55-9d65-4dcb-b8cb-ff3a0747ad43', '2021-05-25 15:35:45', '2021-05-25 15:35:45', '7aff5951-c16c-433f-ab85-26557222df70', '5');
INSERT INTO `praises` VALUES ('efaecbfb-d8ff-41fd-bddf-30323c4e04bf', '2021-05-25 15:34:43', '2021-05-25 15:34:43', '15def002-30e7-4d48-8373-ff341978b963', '2');
INSERT INTO `praises` VALUES ('f9b93e38-ae5b-4936-8546-0f8a716d37de', '2021-05-25 15:35:33', '2021-05-25 15:35:33', '7aff5951-c16c-433f-ab85-26557222df70', '1');

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
INSERT INTO `tags` VALUES ('c4e1386e-b9e1-4e49-9158-9af32cb69377', '无聊', '2021-05-22 13:36:15', '2021-05-25 09:04:06');
INSERT INTO `tags` VALUES ('d391d825-7bf7-4ac6-be23-f65ab14ef8db', '野花', '2021-05-22 13:39:21', '2021-05-25 09:03:46');
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
INSERT INTO `users` VALUES ('06dd0fa1-08e2-4d3e-8933-a162fdf02407', '123456', NULL, '123456', 'admin', NULL, '/public/uploads/avatar.jpg', '2021-05-24 15:45:43', '2021-05-24 15:45:43');
INSERT INTO `users` VALUES ('1', 'admin', 19, '123456', '刘俊杰', 1, '/public/uploads/1621662029206.jpg', '2021-05-22 13:40:08', '2021-05-22 13:40:30');
INSERT INTO `users` VALUES ('2', '5545656377665463285654563546', 19, '123456', '张三', 1, '/public/uploads/1621735885111.jpg', '2021-05-22 13:37:48', '2021-05-23 10:11:26');
INSERT INTO `users` VALUES ('3', 'admin1', 19, '123456', '李四', 1, '/public/uploads/1621735877942.jpg', '2021-05-22 13:40:56', '2021-05-23 10:11:19');
INSERT INTO `users` VALUES ('4', '4554', 19, '123456', '王五', 1, '/public/uploads/1621735892948.jpg', '2021-05-22 13:37:57', '2021-05-23 10:11:34');
INSERT INTO `users` VALUES ('5', '554565637766546328563546', 19, '123456', '赵六', 1, '/public/uploads/1621735854126.jpg', '2021-05-22 13:37:44', '2021-05-23 10:10:55');
INSERT INTO `users` VALUES ('7f0c913b-5f25-44a0-a42a-735d4430d2a5', 'liujunjie', NULL, '123456', 'liujunjie', NULL, '/public/uploads/avatar.jpg', '2021-05-24 15:48:11', '2021-05-24 15:48:11');
INSERT INTO `users` VALUES ('884f7461-7385-4129-b4f0-52281147a47d', '123', NULL, '321', '彳亍', NULL, '/public/uploads/avatar.jpg', '2021-05-24 15:55:53', '2021-05-24 15:55:53');
INSERT INTO `users` VALUES ('983b90bb-1d9a-492b-86e4-d83010efc459', 'hhhhhh', NULL, '123456', '哈哈哈哈', 1, '/public/uploads/1621932866270.jpg', '2021-05-25 16:54:29', '2021-05-25 16:54:29');
INSERT INTO `users` VALUES ('a9fae73a-20fd-41de-9424-ce83d93a0c6b', 'yjx', NULL, 'yjx201223', '鑫鑫', 1, '/public/uploads/1621817806146.jpg', '2021-05-24 08:56:48', '2021-05-24 08:56:48');
INSERT INTO `users` VALUES ('b7c1340e-d7ae-41d5-b240-c2f070353278', 'zzw', NULL, '123456', '张泽伟', 1, '/public/uploads/1621740994201.jpg', '2021-05-23 11:36:36', '2021-05-23 11:36:36');

SET FOREIGN_KEY_CHECKS = 1;
