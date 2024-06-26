import Avatar from '../ui/branding/avatar';
import H2 from '../ui/text/h2';
import H3 from '../ui/text/h3';

export default function HeroSection() {
  return (
    <section className=" flex w-full justify-between pt-large max-[1298px]:flex-row-reverse max-[700px]:pt-extra-large tablet:h-[42.5rem] tablet:px-small laptop:gap-extra-large min-[1298px]:-translate-x-[5%]">
      <div className=" absolute right-0 z-10 w-[62.5rem] -translate-y-[10%] scale-90 max-[1298px]:w-[50rem] max-[1298px]:translate-x-[10%] max-laptop:translate-x-[20%] max-laptop:scale-90 max-tablet:top-[6%] max-tablet:-translate-y-[12%] max-tablet:scale-[83%] max-[700px]:mt-large max-[680px]:-translate-y-[22%] max-mobile-large:-left-[230px] max-[500px]:w-[43.75rem] min-[1298px]:right-[35vw] min-[1298px]:top-[22%]">
        <svg
          className=" fade  lapto relative z-10 w-fit  overflow-visible    fill-primary10 transition-all  duration-slow group-hover:fill-primary20"
          viewBox="-10 0 130 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36.9,-61.9C49.2,-56.8,61.4,-49.7,68.7,-39C75.9,-28.4,78,-14.2,72.5,-3.2C67,7.8,53.9,15.7,47.4,27.6C40.9,39.6,41.1,55.6,34.4,58C27.6,60.4,13.8,49.1,-0.4,49.8C-14.6,50.5,-29.2,63.1,-33.6,59.4C-38,55.6,-32.3,35.5,-38.2,22.8C-44.1,10.2,-61.8,5.1,-67.7,-3.4C-73.6,-12,-67.9,-23.9,-59.1,-31.7C-50.4,-39.4,-38.6,-43,-28.3,-49.2C-17.9,-55.4,-9,-64.2,1.7,-67.1C12.3,-70,24.6,-67,36.9,-61.9Z"
            transform="translate(50 42) scale(0.65)"
          />
        </svg>

        <Avatar className="animate-draw absolute top-0 z-40 w-full  overflow-visible [&>*]:stroke-primary80  [&>.cls-3]:fill-none"></Avatar>
      </div>
      <div className="laptop:w-[62.5rem]"></div>
      <div className="relative z-10 flex flex-col gap-small pt-extra-large max-[1298px]:translate-x-[20%] max-[1298px]:translate-y-[30%] max-[1150px]:translate-x-[10%] max-laptop:translate-x-0 tablet:pt-extra-large">
        <H2
          className="slideInFromRight  relative leading-[6.25rem]  opacity-0 animation-delay-[3s] max-[860px]:leading-[3.75rem] max-[651px]:leading-[4.125rem] max-[600px]:leading-[3.5rem] max-mobile-large:leading-[2.5rem]"
          textType="heading--extra-large"
        >
          MARION DELEERSNYDER
        </H2>
        <H3
          className="slideInFromRight relative opacity-0  animation-delay-[3s] max-[600px]:text-sub-heading max-[600px]:leading-sub-heading"
          textType="heading"
        >
          DESIGNER D&apos;ESPACE & DESIGNER DE SERVICE
        </H3>
      </div>
    </section>
  );
}
