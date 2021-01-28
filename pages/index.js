import Head from "next/head";
import "../styles/Home.module.css";
import images from "./images.json";

const sectionRender = (arr) =>
  arr.map(({ src, text }, i) => (
    <div className="margin-sm" key={i}>
      <div className="thumbnail text-center">
        <img
          title={text || "craft"}
          src={src}
          alt={`image-${i}`}
          className="img-responsive product-image"
        />
        {text ? (
          <div className="caption">
            <p>{text}</p>
          </div>
        ) : null}
      </div>
    </div>
  ));

export default function Home() {
  const first = images.filter(({ column }) => column === 1);
  const second = images.filter(({ column }) => column === 2);
  const third = images.filter(({ column }) => column === 3);

  return (
    <div>
      <Head>
        <title>Dezi Native Designs</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Native American Arts and Crafts" />
        <meta name="keywords" content="Native, American, Arts, Crafts" />
        <meta name="author" content="Desiree Schocko" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      </Head>

      <main>
        <div className="container">
          <div
            className="container margin-top-l"
            style={{ textAlign: "center" }}
          >
            <h3 className="header">
              <strong>MY WORK</strong>
            </h3>

            <h4 className="sub-header">Native American Arts and Crafts</h4>
            <h5>Desiree Schocko / Milwaukee, WI / Jan. 2021</h5>

            <div className="container-fluid">
              <a
                title="Esty"
                target="_blank"
                href="https://www.etsy.com/shop/DeziNativeDesigns?ref=seller-platform-mcnav"
                className="btn btn-default btn-lg margin-sm"
              >
                <i class="fa fa-etsy fa-lg" aria-hidden="true" />
              </a>

              <a
                title="Instagram"
                target="_blank"
                href="https://www.instagram.com/desiodawa/"
                className="btn btn-default btn-lg margin-sm"
              >
                <i class="fa fa-instagram fa-lg" aria-hidden="true" />
              </a>

              <a
                title="Email"
                href="mailto:Dschocko@hotmail.com"
                className="btn btn-default btn-lg margin-sm"
              >
                <i class="fa fa-envelope-o fa-lg" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <hr />

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              {sectionRender(first)}
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              {sectionRender(second)}
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              {sectionRender(third)}
            </div>
          </div>
        </div>
      </main>
      <footer className="margin-top-lg"></footer>
    </div>
  );
}
