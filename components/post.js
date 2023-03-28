
import Image from "next/image"
import Link from "next/link"
import styles from '../styles/blog.module.css'
import { formatearFecha } from "@/utils/helpers"

export default function Post({ post }) {

    const { contenido, imagen, titulo, url, publishedAt } = post

    return (

        <article className={`${styles.post} ${styles['mt-3']}`}>
            <Image src={imagen.data.attributes.url} width={600} height={400} alt={`imagen ${titulo}`} />

            <div className={styles.contendido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{contenido}</p>
                <Link className={styles.enlace} href={`/post/${url}`}>Leer post</Link>
            </div>

        </article>

    )
}
