const { Photo, User } = require("../models");

class PhotoController {
    static async createPhotos(req, res) {
        const { title, caption, poster_image_url } = req.body;
        const UserId = res.locals.user.id;
        try {
            const createPhotos = await Photo.create({
                title,
                caption,
                poster_image_url,
                UserId
            });
            let response = {
                id: createPhotos.id,
                poster_image_url: createPhotos.poster_image_url,
                title: createPhotos.title,
                caption: createPhotos.caption,
                UserId: createPhotos.UserId
            }
            res.status(201).json(response);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    
    static async getAllPhotos(req, res) {
        let UserId = res.locals.user.id;
        try {
            const dataPhotos = await Photo.findAll({
                where: { 
                    UserId
                },
                include: {
                    model: User,
                    attributes: ['id', 'username', 'profile_image_url']
                }
            });
            res.status(200).json({ photos: dataPhotos });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async updatePhotos(req, res) {
        let id = req.params.id;
        const { tittle, caption, poster_image_url } = req.body;
        let editData = {
        tittle,
        caption,
        poster_image_url,
        };
        Photo.update(editData, {
        where: {
            id,
        },
        returning: true,
        });
        res.status(201).json({ message: "photo data edited successfully" });
    }
    catch(error) {
        res.status(500).json(error);
    }

    static deletePhotoId(req, res) {
        let id = req.params.id;
        Photo.destroy({
        where: {
            id,
        },
        });
        res.status(201).json({ message: "data deleted successfully" });
    }
    catch(error) {
        res.status(500).json(error);
    }
}

module.exports = PhotoController;