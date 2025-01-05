import { NextResponse } from 'next/server';
import { CloudinaryService } from '@/data/services/cloudinaryService';

export async function POST() {
  try {
    const cloudinaryService = new CloudinaryService();
    const testImageUrl = 'https://image.tmdb.org/t/p/w500/euYIwmwkmz95mnXvufEmbL6ovhZ.jpg';

    const result = await cloudinaryService.uploadImage(testImageUrl);

    return NextResponse.json({
      success: true,
      url: result
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, error: 'Error al subir imagen' },
      { status: 500 }
    );
  }
}