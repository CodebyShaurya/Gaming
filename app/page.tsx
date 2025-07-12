'use client';
import Navigation from '@/components/ui/navigation';
import HeroSection from '@/components/ui/hero-section';
import GameCarousel from '@/components/ui/game-carousel';
import PlansSection from '@/components/ui/plans-section';
import InfiniteScrollAnimationPage from '@/components/ui/infinite-scroll';
import Footer from '@/components/ui/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <InfiniteScrollAnimationPage />
      <section className="relative bg-tg-bg pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 mb-10 flex flex-wrap items-center lg:mb-[60px]">
            <div className="w-full px-4 lg:w-6/12">
              <div className="mb-[60px] max-w-[500px] xl:mb-[70px]">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Why Choose Our Game Pass?
                </span>
                <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-[40px]">
                  Unlimited Gaming. One Subscription.
                </h2>
              </div>
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full max-w-[520px] px-4">
                  <div className="group mb-12 flex">
                    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center rounded-full border-2 border-primary bg-purple-500  text-xl font-semibold text-white group-hover:bg-transparent group-hover:text-purple-500 md:h-[80px] md:max-w-[80px] md:text-2xl">
                      01
                    </div>
                    <div className="w-full">
                      <h3 className="mb-4 text-xl font-semibold text-white 2xl:text-[22px]">
                        Access 100+ Top Games
                      </h3>
                      <p className="text-base leading-relaxed text-gray-500">
                        Instantly play a huge library of the latest and greatest
                        games across genres, updated monthly.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full max-w-[520px] px-4">
                  <div className="group mb-12 flex">
                    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center rounded-full border-2 border-primary bg-purple-500  text-xl font-semibold text-white group-hover:bg-transparent group-hover:text-purple-500 md:h-[80px] md:max-w-[80px] md:text-2xl">
                      02
                    </div>
                    <div className="w-full">
                      <h3 className="mb-4 text-xl font-semibold text-white 2xl:text-[22px]">
                        Play Anywhere, Anytime
                      </h3>
                      <p className="text-base leading-relaxed text-gray-500">
                        Enjoy seamless gaming on PC, console, and mobile. Your
                        progress is saved in the cloud.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full max-w-[520px] px-4">
                  <div className="group mb-12 flex">
                    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center rounded-full border-2 border-primary bg-purple-500  text-xl font-semibold text-white group-hover:bg-transparent group-hover:text-purple-500 md:h-[80px] md:max-w-[80px] md:text-2xl">
                      03
                    </div>
                    <div className="w-full">
                      <h3 className="mb-4 text-xl font-semibold text-white 2xl:text-[22px]">
                        Exclusive Member Rewards
                      </h3>
                      <p className="text-base leading-relaxed text-gray-500 ">
                        Get early access, in-game bonuses, and special discounts
                        only for subscribers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="right-0 top-1/2 hidden w-1/2 lg:absolute lg:flex lg:-translate-y-1/2">
                <img
                  src="https://demo.tailgrids.com/templates/saas/build/src/assets/images/services/services-09/image-01.png"
                  alt="Gaming Subscription"
                  className="ml-auto max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <GameCarousel />
      <PlansSection />
      <Footer />
    </div>
  );
}