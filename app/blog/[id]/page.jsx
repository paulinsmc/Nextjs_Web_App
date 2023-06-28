import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https:/jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            {data.body}
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Peter Paulinuce</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          consectetur laborum reiciendis placeat suscipit recusandae ipsa
          dolore, quod sit sint quasi facilis excepturi quisquam incidunt
          delectus, labore eos quidem consequatur repudiandae ut adipisci ex
          provident amet numquam. Quo eos sequi aspernatur praesentium vel
          deserunt. Veritatis odit facere at ab, iste non fugiat neque in
          aspernatur ut repudiandae id beatae tempore tenetur voluptatem, maxime
          modi molestiae est corporis quidem veniam rem reprehenderit!
          Accusantium eligendi reprehenderit harum quod temporibus doloribus,
          repudiandae quia soluta, tenetur impedit inventore voluptate eum iusto
          necessitatibus consequuntur iste nostrum possimus veritatis. Quod aut
          dolorum quidem sunt, at consequatur fugiat molestiae esse fugit saepe
          cum, commodi assumenda similique molestias laboriosam culpa libero
          labore repellendus. Id voluptas totam repellat enim nesciunt quos at
          dicta adipisci, neque laborum reprehenderit et soluta, quia doloremque
          quidem nemo inventore aspernatur dolor nam. Explicabo eius deserunt,
          possimus error voluptates doloremque delectus eum sunt quae tempora.
          Quos, totam. Architecto minus eaque laudantium provident. Facere, ut
          saepe eaque inventore autem rem illum quae, commodi sed eum at iure
          temporibus reprehenderit, aperiam quidem odio officia minus aspernatur
          dignissimos id. Praesentium exercitationem incidunt ducimus nisi,
          molestias repudiandae eum autem neque. Blanditiis ipsa dolorum
          inventore cupiditate? Excepturi numquam veniam error?
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
