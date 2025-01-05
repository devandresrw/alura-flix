import cloudinary from "@/config/cloudinary"


export class CloudinaryService {
  private folder = 'movie-app'

  async uploadImage(imageUrl: string): Promise<string> {
    try {
      const result = await cloudinary.uploader.upload(imageUrl, {
        folder: this.folder,
        resource_type: 'auto'
      })
      return result.secure_url
    } catch (err) {
      console.error('Error uploading to Cloudinary:', err);
      throw new Error('Failed to upload image to Cloudinary');
    }
  }

  async uploadMultipleImages(imagesUrls: string[]): Promise<string[]> {
    try {
      const uploadPromises = imagesUrls.map(url => this.uploadImage(url))
      return await Promise.all(uploadPromises)
    } catch (err) {
      console.error('Error uploading to Cloudinary:', err);
      throw new Error('Failed to upload image to Cloudinary');
    }
  }

  async deleteImage(publicId: string): Promise<boolean> {
    try {
      const result = await cloudinary.uploader.destroy(publicId)
      return result.result === 'ok'
    } catch (err) {
      console.error('Error deleting image from Cloudinary:', err);
      throw new Error('Failed to delete image from Cloudinary');
    }
  }

  getPublicIdFromUrl(url: string): string {
    const splitUrl = url.split('/');
    const publicIdWithExtension = splitUrl[splitUrl.length - 1];
    return publicIdWithExtension.split('.')[0];
  }
}