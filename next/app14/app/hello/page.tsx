import Link from 'next/link';

export default function Hello({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const { q } = searchParams;
  return (
    <>
      <h1>Hello!! - {q}</h1>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse fugiat
        porro culpa eveniet, rerum deserunt a, consequatur hic officia
        perferendis neque illo dolores sed ullam repellat pariatur soluta animi
        delectus, nulla suscipit sint eius harum! Cumque, sequi nesciunt
        obcaecati distinctio aliquid soluta enim, laudantium ad aperiam sapiente
        non deleniti in aspernatur esse nobis vero. Accusantium laudantium
        commodi amet voluptates repudiandae inventore maxime, iste minus sunt
        distinctio. Odio atque repudiandae error ipsa a at blanditiis totam
        laborum quia similique mollitia harum quibusdam quaerat, ea vitae itaque
        dicta veritatis officiis deserunt labore quos possimus. Ipsa cumque
        voluptas eum illo in, illum voluptatum. Qui tenetur fuga in veniam
        reprehenderit laudantium distinctio maiores molestiae! Inventore
        architecto iste porro eum unde voluptatem quis, voluptatum ex et
        veritatis, dignissimos expedita aut nihil quasi iure veniam
        reprehenderit harum nesciunt natus aliquam laudantium similique! Esse,
        eaque! Sed mollitia explicabo eos. Eveniet nesciunt asperiores ullam
        nisi officia, nobis, minus omnis quae ea quam ab, exercitationem
        recusandae necessitatibus cumque veniam maxime debitis maiores libero
        commodi similique. Ducimus quasi iusto ipsa, similique veritatis,
        deserunt necessitatibus omnis consectetur quia reprehenderit
        voluptatibus iste? Blanditiis placeat impedit vel dolorem aut laudantium
        sequi, esse magni consequuntur. Nemo hic doloribus obcaecati architecto
        quaerat? Ab aliquid eaque distinctio! Consequatur modi laboriosam porro
        nisi quod aut aliquid minus quas quidem quasi quo mollitia, nemo ducimus
        voluptas aperiam? Quis dignissimos ipsum illum, porro natus fugiat
        veniam rerum aliquid iure unde quibusdam nam ea ipsa dolorem. Harum
        quisquam corporis veritatis dolores, officia, recusandae reiciendis
        perferendis, unde eum incidunt error aspernatur dignissimos iure
        adipisci odit laborum impedit aliquam magni placeat! Minus quibusdam
        vitae, architecto at ullam, saepe tempora dolore voluptatem quod quas
        neque nisi quasi. Soluta temporibus nostrum magni amet nobis beatae
        incidunt, veritatis unde corrupti deleniti odit suscipit aliquid laborum
        animi et numquam at esse ipsa veniam odio. Porro, mollitia ab? Mollitia
        doloremque, aperiam quidem distinctio, beatae voluptates veniam in,
        cumque vitae libero molestias accusamus quasi autem saepe. Consequuntur
        nam dolores mollitia rerum quod doloribus. Sunt ipsa eum, sit cum alias
        ipsam nostrum, fugiat voluptatum sequi expedita, eius illo voluptates
        nihil aliquam laborum deleniti amet? Fugit, itaque deleniti soluta dicta
        optio rerum deserunt? Ducimus perferendis cupiditate reiciendis,
        doloremque alias rerum, reprehenderit quibusdam possimus impedit commodi
        repellendus nam at quas facere dignissimos adipisci obcaecati id
        consequatur magni modi, nemo explicabo recusandae veniam corporis!
        Assumenda repudiandae hic eaque minus ipsa veniam perferendis? Cumque
        numquam officiis voluptate, natus eos repudiandae aperiam vitae autem
        voluptatibus fugit iure quam rem veniam tempora molestias, ex reiciendis
        eveniet optio sapiente animi tempore? Vitae amet necessitatibus ducimus
        eveniet laboriosam quae, aspernatur repudiandae soluta dolor cumque
        aperiam ipsam, a tenetur iusto quos ratione labore. Iste enim eveniet
        libero laboriosam perspiciatis nostrum assumenda voluptas distinctio
        recusandae deleniti minima, voluptates sint tenetur voluptatibus.
        Voluptatum nostrum praesentium dolore, dolorem laboriosam atque quae
        repellendus dolor soluta aperiam rem! Doloribus fugiat facere veniam,
        nihil culpa, hic aliquam libero quis cumque tempora recusandae
        voluptatum. Illo debitis quis quam, provident unde dolores iste veniam
        nulla reprehenderit vel commodi veritatis dicta, itaque alias quae
        ratione architecto consectetur!
      </div>
      <Link href='/' scroll={false} type='button'>
        Dashboard
      </Link>
    </>
  );
}
