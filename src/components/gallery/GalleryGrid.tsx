import React from 'react'
import GalleryCard from './GalleryCard'
import type { GalleryItem } from '@/config/galleryContent'

interface GalleryGridProps<T extends GalleryItem> {
  items: T[]
  type: T['category']
}

function GalleryGrid<T extends GalleryItem>({ items, type }: GalleryGridProps<T>) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">No items found</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(item => (
        <GalleryCard key={item.id} item={item} type={type} />
      ))}
    </div>
  )
}

export default GalleryGrid