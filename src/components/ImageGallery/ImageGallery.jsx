import PropTypes from 'prop-types';
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import styles from './ImageGallery.module.css'

export default function ImageGallery({ collection }) {
    return <ul className={styles.ImageGallery}>
        {collection.map(({ id, webformatURL, largeImageURL, user }) => {
            return <ImageGalleryItem key={id} image={webformatURL} largeImage={largeImageURL} alt={user} />
        })}
    </ul>
}

ImageGallery.propTypes = {
    collection: PropTypes.arrayOf(PropTypes.shape().isRequired,).isRequired,
}