/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon, ChevronLeftIcon, AnnotationIcon, GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/outline'

const transferFeatures = [
  {
    id: 1,
    name: 'خطوات بسيطة لإنشاء متجرك',
    description:
      'لن تحتاج إلى مصمم أو مبرمج أو أي تقني لإنشاء متجرك الالكتروني. خلال خطوات بسيطة فقط وسيكون متجرك الإلكتروني جاهزًا.',
    icon: ChevronLeftIcon,
  },
  {
    id: 2,
    name: 'متجر إلكتروني مبسط ولوحة تحكم سهلة جدًا',
    description:
      'لا تقلق بشأن تعقيدات المتاجر عمومًا. لن يتطلب منك المتجر إضافة طرق دفع، أو أنظمة إدارة المخزون أو غيرها. كل ما عليك هو اختيار الوسيلة التي تفضل التواصل مع زبائنك من خلالها وتضيفها إلى المتجر بضغطة زر. ويمكنك من خلال موقعنا الدخول لمتجرك للإضافة أو التعديل على منتجاتك.',
    icon: ChevronLeftIcon,
  },
  {
    id: 3,
    name: 'فهم أكثر لخدماتك ومنتجاتك',
    description:
      'بدلًا من دخول المشتري معك في محادثة لفهم التفاصيل وتضييع الوقت، متجرك من مشروعي يساعدك على إضافة كل تفاصيل الخدمة على المتجر الخاص بك ليتمكن المشتري من فهمها تمامًا ثم محداثك للشراء فورًا.',
    icon: ChevronLeftIcon,
  },
  {
    id: 4,
    name: 'إنجاز أسرع لعملية الشراء',
    description:
      'يستثمر أصحاب المشاريع الذين يتواجدون على الانترنت 70% أكثر من غيرهم. لا تضيع الفرصة وانجز الكثير من عمليات الشراء في وقت قصير!',
    icon: ChevronLeftIcon,
  },
]
const communicationFeatures = [
  {
    id: 1,
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon,
  },
  {
    id: 2,
    name: 'Reminder emails',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: MailIcon,
  },
]


const features = [
  {
    name: 'Invite team members',
    description: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
  },
  {
    name: 'Notifications',
    description: 'Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.',
  },
  {
    name: 'List view',
    description: 'Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.',
  },
  {
    name: 'Boards',
    description: 'Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.',
  },
  {
    name: 'Keyboard shortcuts',
    description: 'Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.',
  },
  {
    name: 'Reporting',
    description: 'Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed bibendum.',
  },
  {
    name: 'Calendars',
    description: 'Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing turpis.',
  },
  {
    name: 'Mobile app',
    description: 'Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id dignissim tristique proin sed.',
  },
]

export function Fearures() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">مميزات مشروعي التي يبحث عنها كل بائع مستجد</h2>
          <p className="mt-4 text-lg text-gray-500">
          تعرف على التسهيلات الكثيرة التي يقدمها مشروعي لمشروعك!
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {transferFeatures.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                <p className="mr-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 mr-9 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}


// export function Fearures() {
//   return (
//     <div className="py-8 bg-gray-50 overflow-hidden">
//       <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">

//         <div className="relative">
//           <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        //   مميزات مشروعي التي يبحث عنها كل بائع مستجد
//           </h2>
//           <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
        //   تعرف على التسهيلات الكثيرة التي يقدمها مشروعي لمشروعك!!
//           </p>
//         </div>

//         <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
//           <div className="relative">
//             {/* <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
//               Transfer funds world-wide
//             </h3>
//             <p className="mt-3 text-lg text-gray-500">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores
//               officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere.
//               Totam, velit.
//             </p> */}

//             <dl className="mt-10 space-y-10">
//               {transferFeatures.map((item) => (
//                 <div key={item.id} className="relative">
//                   <dt>
//                     <div className="absolute flex items-center justify-center h-12 w-12 rounded-md  text-black">
//                       <item.icon className="h-6 w-6" aria-hidden="true" />
//                     </div>
//                     <p className="mr-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
//                   </dt>
//                   <dd className="mt-2 mr-16 text-base text-gray-500">{item.description}</dd>
//                 </div>
//               ))}
//             </dl>
//           </div>

//           {/* <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
//             <img
//               className="relative mx-auto"
//               width={490}
//               src="https://tailwindui.com/img/features/feature-example-1.png"
//               alt=""
//             />
//           </div> */}
//         </div>

//         <div className="relative mt-12 sm:mt-16 lg:mt-24">
//           <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
//             <div className="lg:col-start-2">
//               <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Always in the loop</h3>
//               <p className="mt-3 text-lg text-gray-500">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus,
//                 cum deleniti sunt in labore nihil quod quibusdam expedita nemo.
//               </p>

//               <dl className="mt-10 space-y-10">
//                 {communicationFeatures.map((item) => (
//                   <div key={item.id} className="relative">
//                     <dt>
//                       <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
//                         <item.icon className="h-6 w-6" aria-hidden="true" />
//                       </div>
//                       <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
//                     </dt>
//                     <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
//                   </div>
//                 ))}
//               </dl>
//             </div>

//             <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
//               <img
//                 className="relative mx-auto"
//                 width={490}
//                 src="https://tailwindui.com/img/features/feature-example-2.png"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
