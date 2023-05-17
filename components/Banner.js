import Image from 'next/image';
import tcglogo from '/Images/tcglogo.png';

const styles = {
  accentedButton: 'bg-black text-white py-2 px-4 rounded-full',
  content: `max-w-7xl flex-1 flex items-center justify-between`,
  wrapper: `h-max-[10rem] flex items-center justify-center bg-[#FCC017] border-y border-black py-3`,
};

const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className="space-y-4 px-10 flex-[3]">
          <h1 className="max-w-xl text-[6rem] font-mediumSerif">Who We Are</h1>
          <h3 className="text-1xl">
            TCG Digital accelerates enterprise digital transformation with
            hyper-contemporary technologies, advanced analytics, and data
            strategy to deliver Velocity to Value. Our strength lies in our
            flexible and scalable solutions that are customized to the unique
            needs of each of our customers.
          </h3>

          <button className={styles.accentedButton}>Start Exploring</button>
        </div>

        <Image
          className="hidden h-32 md:inline-flex object-contain flex-1"
          src={tcglogo.src}
          width={300}
          height={200}
        />
      </div>
    </div>
  );
};

export default Banner;
