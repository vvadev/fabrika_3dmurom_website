import { useSelector } from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';
import CounterComponent from '../components/CounterComponent';
import Testimonial from '../components/Testimonial';
import BlogSlider from '../components/BlogSlider';
import { IRootState } from '../store';

const Aboutus = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <Head>
                <title>О нас | Фабрика 3D Муром – 3D печать и моделирование</title>
            </Head>
            <div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <div className="container">
                        <div className="items-center justify-between py-10 md:flex md:h-[400px] md:py-0">
                            <div className="heading relative mb-0 text-center ltr:md:text-left rtl:md:text-right">
                                <h6>О нас</h6>
                                <h4 className="!text-white">О Фабрике 3D  Муром</h4>
                            </div>
                            <div className="relative mt-6 md:mt-0" data-aos={isRtl ? 'fade-right' : 'fade-left'} data-aos-duration="1000">
                                <svg
                                    width="374"
                                    height="282"
                                    viewBox="0 0 538.0218 520.24984"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mx-auto w-[90%] rtl:rotate-y-180 sm:w-auto md:mx-auto"
                                >
                                    <path d="M821.82762,687.5884a2.80741,2.80741,0,0,1-2.03464-4.86593l.19237-.76476q-.038-.09189-.07644-.18358a7.53909,7.53909,0,0,0-13.90673.05167c-2.27452,5.4781-5.17038,10.96553-5.88341,16.75771a22.30362,22.30362,0,0,0,.39153,7.67061,89.41943,89.41943,0,0,1-8.13413-37.13874,86.307,86.307,0,0,1,.53535-9.6283q.44349-3.93128,1.23055-7.80653a90.45559,90.45559,0,0,1,17.93812-38.3373A24.07278,24.07278,0,0,0,822.092,602.9559a18.3625,18.3625,0,0,0,1.67-5.01791c-.48738.06393-1.83778-7.35909-1.47017-7.81452-.67924-1.03071-1.895-1.54307-2.63681-2.54885-3.68943-5.0021-8.77253-4.12872-11.42612,2.66876-5.6687,2.861-5.72357,7.60577-2.24528,12.16916,2.2129,2.90325,2.51695,6.83168,4.45862,9.93984-.19981.25572-.40756.50344-.6073.75916a91.04046,91.04046,0,0,0-9.50223,15.05378,37.84589,37.84589,0,0,0-2.25945-17.5787c-2.16269-5.21725-6.21632-9.61123-9.786-14.12153-4.2878-5.41757-13.08033-3.05324-13.83575,3.81439q-.011.09973-.02142.19941.79533.44867,1.55706.95247a3.808,3.808,0,0,1-1.53532,6.92992l-.07765.012a37.88961,37.88961,0,0,0,.99876,5.66515c-4.57949,17.71009,5.30731,24.16047,19.42432,24.45023.31163.15979.61531.31958.92694.47145a92.92537,92.92537,0,0,0-5.00193,23.5393,88.13663,88.13663,0,0,0,.06393,14.23066l-.024-.16777a23.28922,23.28922,0,0,0-7.95036-13.44764c-6.11822-5.02589-14.76211-6.87666-21.36259-10.9165a4.37072,4.37072,0,0,0-6.69422,4.252q.01327.0882.027.17642a25.5799,25.5799,0,0,1,2.86849,1.38225q.79532.44877,1.55706.95247a3.8081,3.8081,0,0,1-1.53533,6.93l-.07772.01193c-.05591.008-.10387.016-.15972.024a37.92271,37.92271,0,0,0,6.97545,10.92264c2.86344,15.46022,15.162,16.927,28.31753,12.42488h.008a92.89716,92.89716,0,0,0,6.24043,18.21781H821.269c.08-.24769.15184-.50341.22379-.75113a25.329,25.329,0,0,1-6.16856-.36745c1.654-2.02957,3.308-4.07513,4.962-6.10463a1.384,1.384,0,0,0,.10388-.11987c.839-1.03867,1.68595-2.06945,2.52491-3.10816l.00045-.00126a37.10118,37.10118,0,0,0-1.08711-9.45127Z" transform="translate(-330.9891 -189.87508)" fill="#a5a5a5" /><path d="M784.68188,489.35329c5.90814-21.45223,16.9292-39.72273,34.72329-53.77843a4.89248,4.89248,0,0,1,6.75634-1.45469l40.61465,26.2238a4.89245,4.89245,0,0,1,1.45468,6.75632l-34.72329,53.77843a4.89246,4.89246,0,0,1-6.75632,1.45471l-40.61465-26.22379A4.89247,4.89247,0,0,1,784.68188,489.35329Z" transform="translate(-330.9891 -189.87508)" fill="#a5a5a5" /><path d="M798.28516,475.12149c1.52248-11.3345,10.89894-22.92117,22.32328-34.57366a4.58185,4.58185,0,0,1,6.32752-1.36236l34.90487,22.53714a4.58206,4.58206,0,0,1,1.36257,6.32764l-30.899,47.85549a4.58205,4.58205,0,0,1-6.32771,1.36224l-21.62285-13.96129A20.40975,20.40975,0,0,1,798.28516,475.12149Z" transform="translate(-330.9891 -189.87508)" fill="#fff" /><path d="M801.39977,521.3357c-5.15377-21.64585-4.29431-42.9657,4.53083-63.85372a4.89248,4.89248,0,0,1,5.22058-4.52878l48.22374,3.42179a4.89246,4.89246,0,0,1,4.52876,5.22056l-4.53084,63.85372a4.89247,4.89247,0,0,1-5.22054,4.5288l-48.22374-3.42179A4.89248,4.89248,0,0,1,801.39977,521.3357Z" transform="translate(-330.9891 -189.87508)" fill="#a5a5a5" /><path d="M806.46733,502.31169c-4.12451-10.66664-1.48736-25.33683,2.91283-41.051a4.58187,4.58187,0,0,1,4.88923-4.24135l41.44424,2.94074a4.58205,4.58205,0,0,1,4.24158,4.88924l-4.03183,56.82112a4.582,4.582,0,0,1-4.88945,4.24133l-25.67385-1.82172A20.40974,20.40974,0,0,1,806.46733,502.31169Z" transform="translate(-330.9891 -189.87508)" fill="#fff" /><path d="M805.558,387.709l-20.65947-76.46688A12.785,12.785,0,0,0,769.3901,302.229l0,0a12.785,12.785,0,0,0-9.02253,16.21244l23.89523,78.77245,12.50192,48.47714a11.15676,11.15676,0,1,0,14.30444.63831Z" transform="translate(-330.9891 -189.87508)" fill="#ffb6b6" /><path d="M656.56436,400.93746l21.18655-76.32252a12.785,12.785,0,0,0-8.75169-15.65748l0,0a12.785,12.785,0,0,0-16.02429,9.35261l-19.57713,79.95509L619.454,446.34739a11.15677,11.15677,0,1,0,11.983,7.83792Z" transform="translate(-330.9891 -189.87508)" fill="#ffb6b6" /><polygon points="446.816 504.239 433.315 504.238 426.893 452.165 446.818 452.166 446.816 504.239" fill="#ffb6b6" /><path d="M778.28,708.19791l-41.5155-.00158v-.525a16.15988,16.15988,0,0,1,16.159-16.15874h.001l7.58332-5.75307,14.14881,5.754,3.62405.00009Z" transform="translate(-330.9891 -189.87508)" fill="#2f2e41" /><polygon points="351.81 504.375 338.519 502.004 341.337 449.611 360.953 453.11 351.81 504.375" fill="#ffb6b6" /><path d="M680.79465,708.19791,639.924,700.90914l.09215-.51682a16.15988,16.15988,0,0,1,18.74445-13.07148l.001.00018,8.47541-4.33265,12.91914,8.14819,3.56777.63621Z" transform="translate(-330.9891 -189.87508)" fill="#2f2e41" /><path d="M684.1149,454.68878S671.533,472.51,672.04585,478.49051s4.95628,1.20962.51287,5.98048-7.03249,1.57014-4.84927,7.46428,3.07191,2.07745,2.18322,5.89414.88869,149.80512.88869,149.80512h23.13691s13.04781-84.65063,11.39607-88.60269-1.61387-2.23155.14456-6.43141,3.41329-9.19612,3.41329-9.19612l18.288-51.46886,14.107,72.46739L757.87262,650.515h22.17212s3.79668-126.62986,5.47535-128.20763-.32961-5.12377-2.43586-7.16746-1.6864-4.11877-1.00764-8.32918,3.54219-6.55872,3.4435-9.20125,6.12208-44.62614-3.65343-51.30535S684.1149,454.68878,684.1149,454.68878Z" transform="translate(-330.9891 -189.87508)" fill="#2f2e41" /><path d="M761.47653,277.1745l-25.88066-6.70645L723.515,253.80572l-28.6905,3.527-6.10734,22.72759L668.29182,291.9164c36.61419.21884,16.89656,106.2934,22.27807,113.13715,4.37946,5.56948-21.85839,18.81883-13.63532,27.27064s5.18276,5.06989,3.27462,14.27147-15.81778,18.93956,0,18.84293,111.265-1.46016,108.538-12.36842-2.68412-8.13825-6.79619-14.97738-6.87956-3.01732-5.49582-13.10942-3.1106-17.89788.02026-22.3639c4.80557-6.85486-.03728-56.33733-4.56872-55.01654Z" transform="translate(-330.9891 -189.87508)" fill="#00b0ff" /><path d="M754.08714,277.52823s18.9315-8.04275,25.74916,6.9561c2.17752,4.79055,4.011,16.82332,5.77769,14.155s.06211,3.18135,1.15575,3.18859c.97613.00645,2.47689-1.57243,1.34256,3.86689a10.77325,10.77325,0,0,0,3.14761,9.9166l-32.90372,19.70629Z" transform="translate(-330.9891 -189.87508)" fill="#00b0ff" /><path d="M682.95747,291.16355s-18.93151-8.04275-25.74917,6.95611c-1.9174,4.21827-1.44033,13.5912-5.17412,12.53891s-1.08315,2.9125-1.57576,4.28986c-.54906,1.53518,1.848,5.87959-1.51854,4.35932s-3.15519,9.939-3.15519,9.939L678.68842,348.953Z" transform="translate(-330.9891 -189.87508)" fill="#00b0ff" /><path d="M691.93342,268.70032l-5.45413,9.54473s-14.99885,8.18119-14.99885,9.54472,2.72706,12.49726,0,21.24749,5.20554,25.20618,6.81766,38.74793c6.81766,57.26836-13.4564,78.07668-17.72592,114.53672l43.268,12.63683s7.1827-95.8123,7.1827-117.62882S691.93342,268.70032,691.93342,268.70032Z" transform="translate(-330.9891 -189.87508)" fill="#2f2e41" /><path d="M731.47586,264.60972l11.14636,6.33981s14.58658,3.21609,14.76075,4.56845.226,15.72546,4.04844,24.05567,2.76922,12.7597,13.06359,37.38552c5.25977,12.58224,17.33492,113.25015,17.33492,113.25015L750.5305,468.26941s-19.36232-94.11-22.149-115.74779S731.47586,264.60972,731.47586,264.60972Z" transform="translate(-330.9891 -189.87508)" fill="#2f2e41" /><circle cx="372.61606" cy="33.54069" r="28.19388" fill="#ffb6b6" /><path d="M722.15989,245.32132c-6.6646-5.20939,2.44572-28.12577-8.56-23.23433,0,0-13.45145-8.56-16.154-2.93489-3.1293,6.51338-14.25851,3.55856-21.09433,1.25958a16.60841,16.60841,0,0,0,1.13726-3.90093,31.22909,31.22909,0,0,1-3.9987,2.67807,8.11676,8.11676,0,0,1-2.44572-2.00551,4.96705,4.96705,0,0,1-.62367-5.63736c1.13725-1.74868,3.48512-2.28674,4.86695-3.8398a1.672,1.672,0,0,0,.2295-1.5362,4.39444,4.39444,0,0,1,3.93738-5.50333,1.58022,1.58022,0,0,0,.749-.16313,17.13328,17.13328,0,0,0,3.19165-2.51909c-1.60195.07337.357-9.73249,16.23961-7.87522,3.9987-.14673,6.08693,4.26336,10.0245,4.9604,9.54473-5.45413,18.06454,2.41348,22.21006,9.934C736.01491,212.52422,740.50278,236.7613,722.15989,245.32132Z" transform="translate(-330.9891 -189.87508)" fill="#2f2e41" /><path d="M601.85909,204.87508h-252.73a18.15513,18.15513,0,0,0-18.14,18.13V450.73513a18.16363,18.16363,0,0,0,18.14,18.14h252.73a18.15509,18.15509,0,0,0,18.13-18.13995V223.00508A18.14658,18.14658,0,0,0,601.85909,204.87508Z" transform="translate(-330.9891 -189.87508)" fill="#fff" /><path d="M486.3832,257.1428h-27a5,5,0,1,1,0-10h27a5,5,0,0,1,0,10Z" transform="translate(-330.9891 -189.87508)" fill="#00b0ff" /><path d="M844.3832,486.87508h-27a5,5,0,0,1,0-10h27a5,5,0,0,1,0,10Z" transform="translate(-330.9891 -189.87508)" fill="#00b0ff" /><path d="M556.3832,361.87508h-167a5,5,0,0,1,0-10h167a5,5,0,0,1,0,10Z" transform="translate(-330.9891 -189.87508)" fill="#191919" /><path d="M556.3832,394.87508h-167a5,5,0,0,1,0-10h167a5,5,0,0,1,0,10Z" transform="translate(-330.9891 -189.87508)" fill="#191919" /><path d="M556.3832,427.87508h-167a5,5,0,0,1,0-10h167a5,5,0,0,1,0,10Z" transform="translate(-330.9891 -189.87508)" fill="#191919" /><path d="M522.24911,272.145h-98.73a18.15514,18.15514,0,0,0-18.14,18.13v29.73a18.16365,18.16365,0,0,0,18.14,18.14h98.73a18.15509,18.15509,0,0,0,18.13-18.14v-29.73A18.14657,18.14657,0,0,0,522.24911,272.145Zm16.13,47.86a16.14,16.14,0,0,1-16.13995,16.14H451.36633a43.98722,43.98722,0,0,1-43.98722-43.98722V290.275a16.15571,16.15571,0,0,1,16.14-16.13h98.73a16.14718,16.14718,0,0,1,16.13,16.13Z" transform="translate(-330.9891 -189.87508)" fill="#191919" /><circle cx="143" cy="109" r="17" fill="#191919" /><polygon points="182.11 148.27 106 148 130 142 132.99 132.13 156 132 162.89 141.76 180.29 146.27 181.87 146.68 182.11 148.27" fill="#191919" /><path d="M464.32753,309.72917c3.648-2.8515-1.33872-15.39537,4.68555-12.71791,0,0,7.363-4.68555,8.84232-1.60649,1.7129,3.56527,7.80476,1.94787,11.54653.68946a9.09074,9.09074,0,0,1-.62251-2.13527,17.09573,17.09573,0,0,0,2.18879,1.46591,4.44311,4.44311,0,0,0,1.33873-1.09777,2.71885,2.71885,0,0,0,.34138-3.08576c-.6225-.95719-1.90767-1.25171-2.66405-2.10181a.91524.91524,0,0,1-.12562-.84088,2.40541,2.40541,0,0,0-2.15523-3.01239.86493.86493,0,0,1-.41-.0893,9.37792,9.37792,0,0,1-1.747-1.37889c.87687.04017-.19541-5.32733-8.88917-4.3107-2.1888-.08032-3.33184,2.33366-5.48718,2.7152-5.22455-2.98546-9.8881,1.32108-12.15725,5.43765S454.28707,305.04362,464.32753,309.72917Z" transform="translate(-330.9891 -189.87508)" fill="#191919" /><path d="M601.85909,204.87508h-252.73a18.15513,18.15513,0,0,0-18.14,18.13V450.73513a18.16363,18.16363,0,0,0,18.14,18.14h252.73a18.15509,18.15509,0,0,0,18.13-18.13995V223.00508A18.14658,18.14658,0,0,0,601.85909,204.87508Zm16.13,245.86005a16.14,16.14,0,0,1-16.14,16.14H463.18989A130.20079,130.20079,0,0,1,332.9891,336.67429V223.00508a16.15571,16.15571,0,0,1,16.14-16.13h252.73a16.14719,16.14719,0,0,1,16.13,16.13Z" transform="translate(-330.9891 -189.87508)" fill="#191919" /><path d="M865.89621,709.81761l-315.3575.30731a1.19069,1.19069,0,0,1,0-2.38135l315.3575-.30731a1.19069,1.19069,0,0,1,0,2.38135Z" transform="translate(-330.9891 -189.87508)" fill="#cacaca" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-gradient-to-t from-white/[56%] to-white/0 py-14 dark:!bg-none lg:py-[100px]">
                <CounterComponent title="Факты о компании" />
            </section>

            <section className="relative pt-14 lg:pb-48 lg:pt-[100px]">
                <div className="container relative z-[1]">
                    <div className="text-center lg:w-1/2 ltr:lg:text-left rtl:lg:text-right">
                        <div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right xl:w-[95%]">
                            <h6>Кто мы?</h6>
                            <h4>Мы помогаем воплотить ваш проект в реальность</h4>
                        </div>
                        <p className="pb-10 text-lg font-semibold leading-[30px]">
                            Компания Фабрика 3D Муром - это инновационный лидер в области 3D-печати и моделирования, базирующийся в Муроме и предлагающая широкий спектр услуг для удовлетворения потребностей наших клиентов.
                        </p>
                        <Link href="/career" className="btn capitalize text-white">
                            Присоедениться к нам
                        </Link>
                    </div>
                </div>
                <div className="bottom-0 ltr:right-0 rtl:left-0 lg:absolute" data-aos={isRtl ? 'fade-right' : 'fade-left'} data-aos-duration="1000">
                    <img src="/assets/images/about-bg.png" alt="About" className="rtl:rotate-y-180" />
                </div>
            </section>

            <section className="relative py-14 lg:py-[100px] xl:-mt-[100px]">
                <div className="absolute top-0 z-[1] h-full w-full bg-white ltr:left-0 rtl:right-0 dark:bg-black xl:w-[85%] xl:rounded-r-[32px]"></div>
                <div className="absolute -top-3 hidden h-full w-full rounded-r-[32px] bg-white/50 ltr:left-3 rtl:right-3 dark:bg-gray-dark xl:inline-block xl:w-[85%]"></div>
                <div className="container relative z-[2] ltr:xl:pr-40 rtl:xl:pl-40">
                    <div className="lg:w-2/3">
                        <div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right">
                            <h6>Как это работает?</h6>
                            <h4>Всего 3 простых шага на пути к реализации любого проекта</h4>
                        </div>
                        <p className="pb-10 text-center text-lg font-semibold leading-[30px] ltr:lg:text-left rtl:lg:text-right">
                            Узнайте больше о том, как мы воплощаем ваши идеи в реальность.
                        </p>
                    </div>
                    <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="flex items-start gap-[10px] rounded-[10px] border border-transparent bg-secondary/10 py-6 px-5 transition
                            hover:border-secondary hover:bg-transparent"
                            >
                                <span className="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-secondary text-lg text-white">
                                    01
                                </span>
                                <div>
                                    <h6 className="mb-1 font-bold text-secondary">Анализ и моделирование детали</h6>
                                    <p className="text-sm font-semibold text-black dark:text-gray">
                                        Изучаем строение и требуемые характеристики будущего изделия
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="flex items-start gap-[10px] rounded-[10px] border border-transparent bg-secondary/10 py-6 px-5 transition
                            hover:border-secondary hover:bg-transparent"
                            >
                                <span className="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-secondary text-lg text-white">
                                    02
                                </span>
                                <div>
                                    <h6 className="mb-1 font-bold text-secondary">Печать черновой версии детали</h6>
                                    <p className="text-sm font-semibold text-black dark:text-gray">
                                        Печатаем деталь для проверки соответствия заданным требованиям
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="flex items-start gap-[10px] rounded-[10px] border border-transparent bg-secondary/10 py-6 px-5 transition
                            hover:border-secondary hover:bg-transparent"
                            >
                                <span className="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-secondary text-lg text-white">
                                    03
                                </span>
                                <div>
                                    <h6 className="mb-1 font-bold text-secondary">Запускаем деталь в производство</h6>
                                    <p className="text-sm font-semibold text-black dark:text-gray">
                                        Изготавливаем требуемое количество деталей в кратчайшие сроки
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center ltr:lg:text-left rtl:lg:text-right">
                        <h6>Рост компании</h6>
                        <h4>290% Рост за последний год</h4>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3 md:gap-[30px]">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="group rounded-[32px] border border-transparent bg-white py-8 px-4 text-center transition hover:border-secondary hover:bg-secondary/10 dark:bg-gray-dark dark:hover:bg-secondary">
                                <div className="mx-auto xl:w-1/2">
                                    <h2 className="mb-4 text-4xl font-black text-secondary dark:group-hover:text-black md:mb-0 md:text-6xl md:leading-[75px]">
                                        8x
                                    </h2>
                                    <p className="text-sm font-bold text-gray-dark line-clamp-2 dark:text-white dark:group-hover:text-black">
                                        Количество оптовых заказчиков увеличилось на
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="group rounded-[32px] border border-transparent bg-white py-8 px-4 text-center transition hover:border-secondary hover:bg-secondary/10 dark:bg-gray-dark dark:hover:bg-secondary">
                                <div className="mx-auto xl:w-1/2">
                                    <h2 className="mb-4 text-4xl font-black text-secondary dark:group-hover:text-black md:mb-0 md:text-6xl md:leading-[75px]">
                                        40x
                                    </h2>
                                    <p className="text-sm font-bold text-gray-dark line-clamp-2 dark:text-white dark:group-hover:text-black">
                                        Продажи выросли больше, чем в 40 раз
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="group rounded-[32px] border border-transparent bg-white py-8 px-4 text-center transition hover:border-secondary hover:bg-secondary/10 dark:bg-gray-dark dark:hover:bg-secondary">
                                <div className="mx-auto xl:w-1/2">
                                    <h2 className="mb-4 text-4xl font-black text-secondary dark:group-hover:text-black md:mb-0 md:text-6xl md:leading-[75px]">
                                        2.5K
                                    </h2>
                                    <p className="text-sm font-bold text-gray-dark line-clamp-2 dark:text-white dark:group-hover:text-black">
                                        Высокий уровень вовлеченности клиентов
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="py-14 lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center lg:w-2/3 ltr:lg:text-left rtl:lg:text-right">
                        <h4 className="mb-5">Наши награды</h4>
                        <p className="text-lg leading-[23px]">
                            As the world's leading web & mobile app development company have been privileged to win{' '}
                            <span className="font-semibold text-black dark:text-white">13+ numerous awards</span> for our working process. We’re honored to be a
                            recipient of each of these awards for our hard work & customers loyalty.
                        </p>
                    </div>
                    <div className="grid gap-4 pt-5 sm:grid-cols-3 md:gap-[30px] lg:grid-cols-4 lg:pt-0">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="rounded-[32px] border border-transparent bg-white py-9 px-4 transition hover:border-secondary">
                                <img src="/assets/images/award-1.png" alt="Award" className="mx-auto h-[100px]" />
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="rounded-[32px] border border-transparent bg-white py-9 px-4 transition hover:border-secondary">
                                <img src="/assets/images/award-2.png" alt="Award" className="mx-auto h-[100px]" />
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="rounded-[32px] border border-transparent bg-white py-9 px-4 transition hover:border-secondary">
                                <img src="/assets/images/award-3.png" alt="Award" className="mx-auto h-[100px]" />
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="rounded-[32px] border border-transparent bg-white py-9 px-4 transition hover:border-secondary">
                                <img src="/assets/images/award-4.png" alt="Award" className="mx-auto h-[100px]" />
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="rounded-[32px] border border-transparent bg-white py-9 px-4 transition hover:border-secondary">
                                <img src="/assets/images/award-5.png" alt="Award" className="mx-auto h-[100px]" />
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="rounded-[32px] border border-transparent bg-white py-9 px-4 transition hover:border-secondary">
                                <img src="/assets/images/award-6.png" alt="Award" className="mx-auto h-[100px]" />
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="rounded-[32px] border border-transparent bg-white py-9 px-4 transition hover:border-secondary">
                                <img src="/assets/images/award-7.png" alt="Award" className="mx-auto h-[100px]" />
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="rounded-[32px] border border-transparent bg-white py-9 px-4 transition hover:border-secondary">
                                <img src="/assets/images/award-8.png" alt="Award" className="mx-auto h-[100px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="py-14 lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center">
                        <h6>Познакомьтесь с нашей командой</h6>
                        <h4>Группа компаний 3D Муром</h4>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img src="/assets/images/team-member-1.png" alt="Team" className="h-full w-full rounded-3xl object-cover object-top" />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Салтыков Олег
                            </h4>
                            <h6 className="text-sm font-bold">Хз какая должность</h6>
                        </div>
                        <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img src="/assets/images/team-member-2.png" alt="Team" className="h-full w-full rounded-3xl object-cover object-top" />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Вершинин Владимир
                            </h4>
                            <h6 className="text-sm font-bold">Хз какая должность</h6>
                        </div>
                        {/* <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img src="/assets/images/team-member-3.png" alt="Team" className="h-full w-full rounded-3xl object-cover object-top" />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                James Robinson
                            </h4>
                            <h6 className="text-sm font-bold">Chief Financial Officer</h6>
                        </div>
                        <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img src="/assets/images/team-member-4.png" alt="Team" className="h-full w-full rounded-3xl object-cover object-top" />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Daniel Allen
                            </h4>
                            <h6 className="text-sm font-bold">Chief Marketing Officer</h6>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* <BlogSlider title1="Blog" title2="Unlock the latest trends/news" /> */}

            <Testimonial />

            <section className="relative overflow-x-hidden border-t-2 border-transparent py-14 dark:border-gray/20 lg:py-[100px]">
                <div className="container">
                    <div className="relative">
                        <div className="relative xl:inline-block" data-aos="fade-down" data-aos-duration="1000">
                            <img src="/assets/images/stay-text.png" alt="Stay" className="left-1/2 mx-auto sm:absolute sm:-translate-x-1/2" />
                            <img src="/assets/images/updated-text.png" alt="Update" className="mx-auto sm:pt-4 xl:mx-0" />
                            <div className="top-20 ltr:left-[105%] rtl:right-[105%] xl:absolute">
                                <svg
                                    width="320"
                                    height="282"
                                    viewBox="0 0 846.67004 497.80337"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mx-auto my-8 w-[90%] sm:w-auto"
                                >
                                    <path d="M313.74006,257.809a25.66667,25.66667,0,0,0-25.6377,25.63769V562.17127a25.66668,25.66668,0,0,0,25.6377,25.6377H891.46467a25.66667,25.66667,0,0,0,25.63769-25.6377V283.44666A25.66666,25.66666,0,0,0,891.46467,257.809Z" transform="translate(-176.66498 -201.09832)" fill="#000" /><path d="M891.46467,588.809H313.74006a26.668,26.668,0,0,1-26.6377-26.6377V283.44666a26.668,26.668,0,0,1,26.6377-26.63769H891.46467a26.668,26.668,0,0,1,26.63769,26.63769V562.17127A26.668,26.668,0,0,1,891.46467,588.809Zm-577.72461-330a24.66537,24.66537,0,0,0-24.6377,24.63769V562.17127a24.66538,24.66538,0,0,0,24.6377,24.6377H891.46467a24.66537,24.66537,0,0,0,24.63769-24.6377V283.44666A24.66536,24.66536,0,0,0,891.46467,258.809Z" transform="translate(-176.66498 -201.09832)" fill="#3f3d56" /><ellipse cx="472.6985" cy="572.88925" rx="2.02806" ry="7.74518" transform="translate(-295.14538 821.40572) rotate(-87.72792)" fill="#191919" /><ellipse cx="522.00583" cy="570.27884" rx="2.02806" ry="7.74518" transform="matrix(0.03964, -0.99921, 0.99921, 0.03964, -245.18448, 868.16738)" fill="#3f3d56" /><ellipse cx="453.7554" cy="557.67637" rx="2.02806" ry="7.74518" transform="translate(-298.13656 787.86775) rotate(-87.72792)" fill="#ff6584" /><ellipse cx="434.25811" cy="552.0355" rx="1.82088" ry="3.44561" transform="translate(-340.06339 719.89515) rotate(-83.49842)" fill="#191919" /><ellipse cx="422.88003" cy="540.38255" rx="1.82088" ry="3.44561" transform="translate(-338.57512 698.25676) rotate(-83.49842)" fill="#3f3d56" /><ellipse cx="487.18112" cy="560.22426" rx="1.82088" ry="3.44561" transform="translate(-301.26898 779.73933) rotate(-83.49842)" fill="#191919" /><ellipse cx="464.61673" cy="565.1829" rx="1.82088" ry="3.44561" transform="translate(-326.20514 761.71723) rotate(-83.49842)" fill="#ff6584" /><ellipse cx="501.11393" cy="573.17026" rx="1.82088" ry="3.44561" transform="translate(-301.77653 805.06266) rotate(-83.49842)" fill="#3f3d56" /><path d="M176.665,532.21069a1.18647,1.18647,0,0,0,1.19006,1.19h844.29a1.19,1.19,0,0,0,0-2.38H177.855A1.18651,1.18651,0,0,0,176.665,532.21069Z" transform="translate(-176.66498 -201.09832)" fill="#333" /><path d="M465.25342,511.18635a2.80741,2.80741,0,0,1-2.03464-4.86593l.19237-.76476q-.038-.09189-.07644-.18358a7.53909,7.53909,0,0,0-13.90673.05167c-2.27452,5.4781-5.17037,10.96553-5.8834,16.75771a22.30331,22.30331,0,0,0,.39152,7.6706,89.4194,89.4194,0,0,1-8.13413-37.13874,86.307,86.307,0,0,1,.53535-9.62829q.44349-3.93128,1.23055-7.80653A90.45569,90.45569,0,0,1,455.506,436.94119a24.0727,24.0727,0,0,0,10.0118-10.38734,18.3625,18.3625,0,0,0,1.67-5.01791c-.48738.06393-1.83778-7.35909-1.47017-7.81452-.67924-1.03071-1.895-1.54307-2.63681-2.54885-3.68943-5.0021-8.77253-4.12872-11.42612,2.66876-5.6687,2.861-5.72357,7.60577-2.24528,12.16915,2.2129,2.90325,2.517,6.83168,4.45862,9.93985-.1998.25571-.40756.50344-.6073.75916a91.04,91.04,0,0,0-9.50223,15.05378,37.84589,37.84589,0,0,0-2.25945-17.5787c-2.16268-5.21725-6.21632-9.61123-9.786-14.12153-4.2878-5.41757-13.08033-3.05324-13.83575,3.81438q-.011.09975-.02141.19942.79532.44866,1.55705.95247a3.808,3.808,0,0,1-1.53532,6.92992l-.07765.012a37.88983,37.88983,0,0,0,.99876,5.66515c-4.57949,17.71009,5.30731,24.16047,19.42432,24.45023.31164.15979.61531.31958.92695.47144a92.925,92.925,0,0,0-5.00194,23.53931,88.13663,88.13663,0,0,0,.06393,14.23066l-.024-.16777a23.28922,23.28922,0,0,0-7.95036-13.44764c-6.11822-5.0259-14.76211-6.87666-21.36259-10.9165a4.37072,4.37072,0,0,0-6.69422,4.252q.01328.08819.027.17642a25.5806,25.5806,0,0,1,2.86848,1.38225q.79533.44877,1.55706.95247a3.8081,3.8081,0,0,1-1.53533,6.93l-.07772.01193c-.05591.008-.10387.016-.15972.024a37.92262,37.92262,0,0,0,6.97545,10.92265c2.86344,15.46021,15.16195,16.927,28.31753,12.42488h.008a92.89781,92.89781,0,0,0,6.24043,18.21781h22.2928c.08-.24769.15184-.50341.22379-.75113A25.32943,25.32943,0,0,1,458.75,529.972c1.654-2.02957,3.308-4.07513,4.962-6.10463a1.384,1.384,0,0,0,.10388-.11987c.839-1.03867,1.68595-2.06945,2.52491-3.10816l.00045-.00127a37.10115,37.10115,0,0,0-1.08711-9.45126Z" transform="translate(-176.66498 -201.09832)" fill="#a5a5a5" /><path d="M353.966,498.81733a4.552,4.552,0,0,1-3.299-7.88974c.11478-.4562.19712-.78382.3119-1.24q-.06159-.149-.12393-.29767a12.2241,12.2241,0,0,0-22.54876.08379c-3.688,8.88234-8.38338,17.77981-9.53951,27.1714a36.16371,36.16371,0,0,0,.63483,12.43734,144.98721,144.98721,0,0,1-13.1889-60.21777,139.94083,139.94083,0,0,1,.868-15.61158q.7191-6.37428,1.99525-12.65772a146.66713,146.66713,0,0,1,29.08536-62.16116,39.03223,39.03223,0,0,0,16.23341-16.84233,29.77331,29.77331,0,0,0,2.70775-8.13617c-.79026.10366-2.97984-11.93224-2.38379-12.67067-1.10133-1.67123-3.07254-2.502-4.27538-4.13278-5.98215-8.11055-14.224-6.69442-18.52663,4.32719-9.19138,4.6389-9.28035,12.33221-3.64056,19.73141,3.58806,4.70741,4.08106,11.07707,7.22933,16.11673-.324.41463-.66083.8163-.98469,1.23092a147.61451,147.61451,0,0,0-15.40717,24.40862,61.36437,61.36437,0,0,0-3.66353-28.50258c-3.50665-8.4594-10.07932-15.58391-15.86734-22.897-6.95236-8.7842-21.20882-4.9506-22.43367,6.18475q-.01777.16173-.03472.32334,1.28956.72747,2.52466,1.54435a6.17447,6.17447,0,0,1-2.48942,11.23637l-.12591.01941a61.43524,61.43524,0,0,0,1.61943,9.18563c-7.42532,28.71562,8.6054,39.17444,31.49511,39.64427.5053.25908.99769.51817,1.503.76441a150.67077,150.67077,0,0,0-8.11027,38.16728,142.905,142.905,0,0,0,.10366,23.074l-.03889-.272a37.76173,37.76173,0,0,0-12.89093-21.80436c-9.92024-8.14913-23.93569-11.15-34.63788-17.70031-5.15173-3.15315-11.75331.92159-10.8542,6.89434q.02153.143.04377.286a41.47519,41.47519,0,0,1,4.651,2.24122q1.28956.72765,2.52466,1.54436a6.17454,6.17454,0,0,1-2.48943,11.23648l-.126.01935c-.09065.013-.16842.026-.259.039a61.48913,61.48913,0,0,0,11.31019,17.71028c4.64285,25.06761,24.584,27.446,45.91482,20.146h.013A150.62571,150.62571,0,0,0,316.914,531.09055h36.14615c.12965-.40161.2462-.81624.36285-1.21791a41.06914,41.06914,0,0,1-10.00185-.59579c2.68186-3.2908,5.36362-6.60752,8.04548-9.89821a2.243,2.243,0,0,0,.16843-.19436c1.36032-1.68413,2.73364-3.35547,4.094-5.03966l.00073-.00205a60.157,60.157,0,0,0-1.76268-15.32453Z" transform="translate(-176.66498 -201.09832)" fill="#a5a5a5" /><path d="M848.65424,219.13887c-2.42692-18.59978-45.32926-17.41328-49.38014.08608-2.149-1.344-7.6151-.41373-9.65378,1.1311s-3.34526,3.81585-4.62472,6.0204c-1.74633,3.062-3.55682,6.23354-3.94332,9.74441-.40322,3.50408.9738,7.47361,4.15053,9.0339,2.52012,1.24338,8.06567.40374,10.8361-.15291,1.93321-.38435,3.55582-.721,4.933-1.0511a9.47428,9.47428,0,0,0-.90152-6.41525A7.68965,7.68965,0,0,1,805.347,241.439c.21715.41871,8.07715,59.5855,8.07715,59.5855a34.14394,34.14394,0,0,0,6.47573.16162,74.297,74.297,0,0,0,.72332-22.07656,64.33424,64.33424,0,0,1,5.36885,13.24912,78.6534,78.6534,0,0,1,1.82211,7.82022c18.70606-3.49791,43.99269-15.546,48.60648-36.00359q-.038-.099-.07645-.19794a2.9059,2.9059,0,0,1,4.78372-3.10718c.56394.58039,1.067,1.0765,1.4914,1.46091C880.97968,249.26651,871.06988,237.51023,848.65424,219.13887Z" transform="translate(-176.66498 -201.09832)" fill="#2f2e41" /><polygon points="398.857 473.567 388.37 468.084 405 424.121 420.479 432.214 398.857 473.567" fill="#a0616a" /><path d="M533.20506,674.13544a5.29792,5.29792,0,0,0,2.23593,7.14174l20.8529,10.90054,7.47233-5.55376-2.479,8.159,7.8653,4.11873,11.64879-27.6625-2.65554-1.59094L567.328,663.13208l-3.49369-2.09513-3.92393,7.50513-22.66708,2.79452A5.289,5.289,0,0,0,533.20506,674.13544Z" transform="translate(-176.66498 -201.09832)" fill="#2f2e41" /><polygon points="388.113 311.722 380.485 302.674 412.533 268.29 423.791 281.644 388.113 311.722" fill="#a0616a" /><path d="M525.81687,496.296a5.29792,5.29792,0,0,0-.63678,7.45643l15.16785,17.98892,9.01949-2.30839-5.38556,6.61135,5.71826,6.7918,21.26153-21.18621-1.85473-2.4785-7.54221-10.12915-2.43934-3.26267-6.47506,5.45875-22.0358-6.00239A5.289,5.289,0,0,0,525.81687,496.296Z" transform="translate(-176.66498 -201.09832)" fill="#2f2e41" /><path d="M901.19661,478.91611s32.38616,69.31912-101.72943,50.64018c0,0-71.45446-79.18781-69.39008-88.71558,0,0-30.41185-30.90259-28.92373-31.46518s2.40611-1.78452-.05289-1.67355-2.459-3.5495-2.459-3.5495-54.96128,59.603-101.23992,89.17957l-16-18s6.23992-19.5191,9.23992-19.5191,4.03394.721,4.517-3.13951-1.906-7.17545,1.28854-7.518,69.40237-77.72218,69.40237-77.72218,7.14325-25.48687,28.96768-20.55361,135.23,97.13406,135.23,97.13406Z" transform="translate(-176.66498 -201.09832)" fill="#2f2e41" /><path d="M846.58277,531.80243l-177.1812-1.47038-77,122L570.64149,640.813l4.82369-2.036s-1.4603-16.95646.32864-21.24911,7.11076-3.00129,7.11076-3.00129l44.89283-103.52875a43.43477,43.43477,0,0,1,44.694-29.42261c37.14648-5.41748,97.44629-1.08887,160.0918,4.22705Z" transform="translate(-176.66498 -201.09832)" fill="#2f2e41" /><path d="M744.00023,324.17135a13.09822,13.09822,0,0,1,11.01188,14.5774,12.56608,12.56608,0,0,1-.46,2.02574L790.959,368.39l-7.51294,23.40381-45.78293-43.22188a13.06187,13.06187,0,0,1-8.07424-13.75137,12.50016,12.50016,0,0,1,14.0718-10.70016Q743.8308,324.14355,744.00023,324.17135Z" transform="translate(-176.66498 -201.09832)" fill="#a0616a" /><path d="M904.6128,325.8952l-13.09,36.24-51.19,72.34s-.42-.18-1.18-.5c-4.4-1.9-20.38-8.88-35.41-16.81-14.11-7.45-27.4-15.74-29.46-21.44q-.33-.9-.6-1.74v-.01a37.51139,37.51139,0,0,1-1.79-8.96c-.17-2.35-.02-3.61-.34-3.76-.25-.11-.77.43-1.92,1.65-.08.08-.15.16-.23.23-4.16,4.17005-9.27,3.63-8.02,1.65,1.28-2.03.61-1.99-1.27-4.11-1.4-1.58-5.95-7.76-8.19-10.81-.77-1.05-1.26-1.73-1.26-1.73l.76995-1.21,2.13-3.34,10.13-15.88.56-.87s20.82,4.81,23.59,9.38c2.78,4.57-4.19,4.42,2.78,4.57,6.97.15,14.08-9.33,8.99.1-5.09,9.42005-3.75,12.71,2.55,11.22,2.56-.61,6.61,1.32,10.51,3.82v.01a82.53159,82.53159,0,0,1,7.05,5.12994c2.41,1.94,4.04,3.41,4.04,3.41l39.54-80.22,4.38-8.88a22.668,22.668,0,0,1,13.26-11.5l1.37,2.39A271.15657,271.15657,0,0,1,904.6128,325.8952Z" transform="translate(-176.66498 -201.09832)" fill="#00b0ff" /><path d="M906.80274,440.91522c12.12006,2.82-.77383,91.04484-15.22,91.32-105,2-73.03-56.91-78.66-62.55-5.63-5.65-10.71-1.6-5.63-10.39,3.7-6.4,9.19-5.45,9.27-9.04.04-1.34-.67-3.3-2.51-6.52-6.76-11.84-6.76-15.37-6.76-15.37a43.43941,43.43941,0,0,1-3.55-11.2,53.18549,53.18549,0,0,1-.4-17.48,56.83055,56.83055,0,0,1,9.33-23.75v-.01c.50994-.76,1.04-1.53,1.6-2.29,1.27-1.73,8.31-1.4,8.31-1.4l15-63-8.68-25.12,41.11-19.26,10.93,19.02,1.37,2.39a271.15657,271.15657,0,0,1,22.3,39.63c6.06994,13.51,11.06,28.51,11.24,41.56.48,34.03-5.39,44.15-5.39,44.15s14.25,10.65,7.12,17.16C910.46277,435.28522,894.68274,438.09521,906.80274,440.91522Z" transform="translate(-176.66498 -201.09832)" fill="#00b0ff" /><path d="M720.56314,315.883l-6.70765,5.09521a6.30367,6.30367,0,0,0-1.19153,8.81853l16.15461,21.23364,9.53929,12.52734a6.29316,6.29316,0,0,0,8.80445,1.19l6.71545-5.10149a6.31459,6.31459,0,0,0,1.18373-8.81225l-.9899-1.30853L734.502,323.8134l-5.13439-6.74035A6.28,6.28,0,0,0,720.56314,315.883Z" transform="translate(-176.66498 -201.09832)" fill="#3f3d56" /><path d="M724.071,315.49787l-7.2259,5.04071a5.38709,5.38709,0,0,0-1.17868,7.9711l9.45779,11.396,5.04015,6.07081,3.36278,4.05026,7.52061,9.06117a6.57894,6.57894,0,0,0,8.69141,1.081l5.41452-3.77689,1.80152-1.25655a5.47632,5.47632,0,0,0,2.33833-5.59767,5.4001,5.4001,0,0,0-1.15768-2.38969l-22.2228-26.779-3.15059-3.79018A6.57021,6.57021,0,0,0,724.071,315.49787Z" transform="translate(-176.66498 -201.09832)" fill="#00b0ff" /><path d="M728.68823,343.6436A13.09821,13.09821,0,0,1,739.70011,358.221a12.565,12.565,0,0,1-.46,2.02574L775.647,387.86224l-7.51294,23.4038-45.78293-43.22188a13.06189,13.06189,0,0,1-8.07425-13.75137,12.50018,12.50018,0,0,1,14.07181-10.70016Q728.5188,343.61579,728.68823,343.6436Z" transform="translate(-176.66498 -201.09832)" fill="#a0616a" /><path d="M877.17284,302.68822l0,0a22.61758,22.61758,0,0,1,16.76119,29.84416L876.21525,381.605l-51.19846,72.34645S763.617,428.01634,758.96832,415.1972s-.45081-17.24246-4.64872-12.81915-9.52063,3.89886-8.2463,1.87467.6037-1.981-1.27265-4.10155S735.352,387.6106,735.352,387.6106l13.58821-21.30125s20.82083,4.80643,23.59489,9.37928-4.19791,4.42331,2.77406,4.57284,14.08409-9.334,8.99147.09332-3.74987,12.714,2.55073,11.22016,21.59473,12.37426,21.59473,12.37426l43.92859-89.09964A22.61759,22.61759,0,0,1,877.17284,302.68822Z" transform="translate(-176.66498 -201.09832)" fill="#00b0ff" /><circle cx="827.92841" cy="250.10272" r="32.59204" transform="translate(-111.01969 457.58887) rotate(-45)" fill="#a0616a" /><path d="M866.04,214.59666c-2.42692-18.59978-45.32926-17.41328-49.38014.08608-2.149-1.344-7.6151-.41373-9.65379,1.1311s-3.34525,3.81585-4.62471,6.0204c-1.74633,3.062-13.96731,13.42128-15.79855,10.401-4.12116-6.79709-12.20276,8.05572-6,18,1.48724,2.38437,30.22957-1.44335,33-2,1.93321-.38435-1.37723.3301,0,0,.44491-2.15735,4.93509-13.30366,3.87339-15.24194a7.68965,7.68965,0,0,1,5.27656,3.90345c.21715.41871,8.07715,59.5855,8.07715,59.5855a34.14394,34.14394,0,0,0,6.47573.16162,74.297,74.297,0,0,0,.72332-22.07656,64.33438,64.33438,0,0,1,5.36885,13.24911,78.65425,78.65425,0,0,1,1.82211,7.82023c18.70606-3.49791,43.99269-15.546,48.60648-36.00359C868.58277,251.23523,888.4556,232.968,866.04,214.59666Z" transform="translate(-176.66498 -201.09832)" fill="#2f2e41" /><ellipse cx="573.27891" cy="306.97447" rx="5.25681" ry="7.55666" transform="translate(10.29689 628.98339) rotate(-81.72174)" fill="#191919" /><ellipse cx="622.45043" cy="302.17642" rx="5.2568" ry="7.55666" transform="translate(57.13673 673.53534) rotate(-81.72174)" fill="#3f3d56" /><ellipse cx="559.8143" cy="267.16631" rx="5.25681" ry="7.55666" transform="translate(38.1643 581.58252) rotate(-81.72174)" fill="#ff6584" /><ellipse cx="542.60374" cy="251.92323" rx="4.77581" ry="3.3223" transform="translate(109.91982 591.50821) rotate(-89.56675)" fill="#191919" /><ellipse cx="535.35801" cy="221.55162" rx="4.77581" ry="3.3223" transform="translate(133.09963 554.12074) rotate(-89.56675)" fill="#3f3d56" /><ellipse cx="591.70317" cy="275.00353" rx="4.77581" ry="3.3223" transform="translate(135.56834 663.51202) rotate(-89.56675)" fill="#191919" /><ellipse cx="567.94137" cy="286.86752" rx="4.77581" ry="3.3223" transform="translate(100.12256 651.52518) rotate(-89.56675)" fill="#ff6584" /><ellipse cx="601.01863" cy="308.79527" rx="4.77581" ry="3.3223" transform="translate(111.0226 706.36344) rotate(-89.56675)" fill="#3f3d56" /><ellipse cx="716.40157" cy="334.83205" rx="1" ry="2.5" transform="translate(-237.78641 277.96167) rotate(-35.5592)" fill="#3f3d56" /><ellipse cx="713.40157" cy="330.83205" rx="1" ry="2.5" transform="translate(-236.01969 275.4711) rotate(-35.5592)" fill="#3f3d56" />
                                </svg>
                            </div>
                        </div>
                        <p className="pt-2 text-center text-lg font-bold text-gray-dark dark:text-white ltr:xl:text-left rtl:xl:text-right">
                            Введите свой адрес электронной почты, чтобы подписаться на нашу рассылку новостей!
                        </p>
                        <form
                            action=""
                            className="relative z-[1] pt-[50px] text-center ltr:xl:text-left rtl:xl:text-right"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div className="relative inline-block w-full sm:w-auto">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full rounded-3xl py-4 font-bold leading-5 outline-none ltr:pl-4 ltr:pr-[110px] rtl:pr-4 rtl:pl-[110px] dark:bg-gray-dark sm:w-[540px] sm:py-6 ltr:sm:pl-[30px] ltr:sm:pr-[140px] rtl:sm:pr-[30px] rtl:sm:pl-[140px]"
                                />
                                <button
                                    type="submit"
                                    className="absolute top-0 h-full bg-secondary px-4 font-extrabold uppercase text-white ltr:right-0 ltr:rounded-r-3xl rtl:left-0 rtl:rounded-l-3xl sm:px-7"
                                >
                                    подтвердить
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="absolute bottom-20 ltr:left-0 rtl:right-0">
                    <svg width="171" height="216" viewBox="0 0 171 216" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.06" d="M160.487 10.9038L47.9038 205.904L-64.6795 10.9038L160.487 10.9038Z" stroke="#7780A1" strokeWidth="20" />
                    </svg>
                </div>
            </section>
        </div>
    );
};

export default Aboutus;
