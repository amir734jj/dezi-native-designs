import Head from "next/head";
import "../styles/Home.module.css";

export default function Home() {
  const count = 9;
  const chuckSize = 2;
  const images = [...Array(count).keys()].map((x) => x + 1);

  let m, n;
  let first, second, third;

  m = Math.ceil(count / 3);
  n = Math.ceil((2 * count) / 3);

  first = images.slice(0, m);
  second = images.slice(m, n);
  third = images.slice(n, count);

  return (
    <div>
      <Head>
        <title>Dezi Native Designs</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        ></link>
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

            <h5 className="sub-header">Native American Arts and Crafts</h5>
            <p>Desiree Schocko / Jan. 2021</p>

            <div className="container-fluid">
              <a
                target="_blank"
                href="https://www.etsy.com/shop/DeziNativeDesigns?ref=seller-platform-mcnav"
                className="btn btn-default btn-xlg margin-sm"
              >
                <i class="fa fa-etsy" aria-hidden="true" />
              </a>

              <a
                target="_blank"
                href="https://www.instagram.com/desiodawa/"
                className="btn btn-default btn-xlg margin-sm"
              >
                <i class="fa fa-instagram" aria-hidden="true" />
              </a>

              <a
                href="mailto:Dschocko@hotmail.com"
                className="btn btn-default btn-xlg margin-sm"
              >
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <hr />

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              {first.map((i) => (
                <img
                  key={i}
                  src={`image${i}.jpg`}
                  className="img-thumbnail margin-sm product-image"
                  alt=""
                />
              ))}
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              {second.map((i) => (
                <img
                  key={i}
                  src={`image${i}.jpg`}
                  className="img-thumbnail margin-sm product-image"
                  alt=""
                />
              ))}
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              {third.map((i) => (
                <img
                  key={i}
                  src={`image${i}.jpg`}
                  className="img-thumbnail margin-sm product-image"
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
