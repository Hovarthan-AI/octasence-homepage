// 'use client';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

// export default function UtilitiesSection() {
//   return (
//     <section id="utilities" className="space-y-6">
//       <div>
//         <h2 className="text-3xl font-bold text-gray-900 mb-4">🛠 Utilities</h2>
//         <p className="text-lg text-gray-600 mb-6">
//           Helper functions and utilities for working with Lucide Icons across
//           Helper functions and utilities for working with Lucide Icons across
//           different frameworks.
//         </p>
//       </div>

//       <div className="space-y-8">
//         <div>
//           <h3 className="text-xl font-semibold text-gray-900 mb-4">
//             Size and Color Props
//           </h3>
//           <p className="text-gray-600 mb-4">
//             Lucide icons accept standard size and color props for easy
//             customization.
//           </p>
//           <SyntaxHighlighter
//             language="typescript"
//             style={vscDarkPlus}
//             className="rounded-lg mb-4"
//           >
//             {`import { Home } from 'lucide-react';
//             {`import {Home} from 'lucide-react';

//             function MyComponent() {
//   return (
//             <Home
//               size={24}
//               color="#0284C7"
//               className="custom-class"
//             />
//             );
// }`}
//           </SyntaxHighlighter>
//         </div>

//         <div>
//           <h3 className="text-xl font-semibold text-gray-900 mb-4">
//             SVG Optimization
//           </h3>
//           <p className="text-gray-600 mb-4">
//             Lucide icons are pre-optimized using SVGO to ensure minimal bundle
//             size impact. The build process includes:
//           </p>
//           <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
//             <li>Removal of unnecessary metadata</li>
//             <li>Path optimization and simplification</li>
//             <li>Consistent viewBox standardization (24x24)</li>
//             <li>Color attribute normalization (currentColor)</li>
//             <li>Tree-shaking support for reduced bundle size</li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="text-xl font-semibold text-gray-900 mb-4">
//             Framework Support
//           </h3>
//           <p className="text-gray-600 mb-4">
//             Lucide provides official packages for multiple frameworks:
//           </p>
//           <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
//             <ul className="list-disc list-inside space-y-3 text-gray-700">
//               <li>
//                 <strong>React:</strong>{' '}
//                 <code className="text-blue-600">lucide-react</code>
//               </li>
//               <li>
//                 <strong>Vue:</strong>{' '}
//                 <code className="text-green-600">lucide-vue</code>
//               </li>
//               <li>
//                 <strong>Angular:</strong>{' '}
//                 <code className="text-red-600">lucide-angular</code>
//               </li>
//               <li>
//                 <strong>Svelte:</strong>{' '}
//                 <code className="text-orange-600">lucide-svelte</code>
//               </li>
//               <li>
//                 <strong>Vanilla JS:</strong>{' '}
//                 <code className="text-purple-600">lucide</code>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
