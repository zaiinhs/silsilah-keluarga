import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src="/image-hero.jpg"
            alt="Hero Image"
            className="max-w-sm rounded-lg shadow-2xl"
            width="350"
            height="200"
          />
          <div>
            <ul className="flex">
              <li>
                <Link href="/">Beranda</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </main>
  );
}
