import Image from "next/image"
import Layout from "@/components/layout"
import styles from '../styles/nosotros.module.css'


export default function Nosotros() {
    return (
        <>
            <Layout
                title={'Nosotros'}
                description={'Sobre nosotros, blog de musica, venta de guitarras y mas'}
            >

                <main className="contenedor">

                    <h2 className="heading">Nosotros</h2>

                    <div className={styles.contenido}>

                        <Image src='/img/nosotros.jpg' width={1000} height={800} alt="Imagen nosotros" />

                        <div>
                            <p>Nam eu enim quam. In finibus ultricies erat non iaculis. Vestibulum et ultrices justo. Donec quis lacinia eros. Sed accumsan fermentum varius. Curabitur eget posuere tellus. Etiam in justo sit amet metus posuere fermentum in vitae libero. Phasellus scelerisque molestie nisl non ultricies. Mauris ullamcorper sit amet velit sit amet tincidunt.</p>

                            <p>

                                Proin sodales pellentesque nunc, sed luctus neque vehicula eu. Curabitur orci arcu, sollicitudin scelerisque dignissim a, vehicula quis lorem. Nullam consequat gravida mi, nec interdum odio efficitur a. Donec nec aliquam nibh, vel bibendum urna. Vestibulum vitae turpis libero. Curabitur at cursus quam. Fusce nec enim porttitor, ultrices justo mattis, ornare sem. Aliquam vitae venenatis metus. Nunc varius sed velit et fringilla.</p>

                        </div>


                    </div>

                </main>


            </Layout>

        </>

    )
}


