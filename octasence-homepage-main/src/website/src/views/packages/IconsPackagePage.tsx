'use client';
import { Settings as IconSettings } from 'lucide-react';
import React from 'react';
import { Toaster } from 'react-hot-toast';

import BackButton from '@/components/common/BackButton';
import StatCard from '@/components/packages/StatCard';
import { IconDownload, IconGlobe, IconPackage } from '@/lib/icons';

export default function IconsPackagePage() {
  return (
    <>
      <Toaster position="bottom-right" containerStyle={{ zIndex: 40000 }} />

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#1651C6] to-[#0D388E] text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <BackButton
                fallbackUrl="/packages"
                label="Back to Packages"
                className="text-white hover:text-white"
              />
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                Lucide Icon Library
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                3,000+ beautiful icons for React, Vue, and Flutter. Fully
                customizable with TypeScript support.
              </p>
              <div className="pt-4">
                <a
                  href="https://lucide.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium"
                >
                  Visit Lucide Website
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              icon={<IconPackage className="w-6 h-6" />}
              label="Total Icons"
              value="3,000+"
            />
            <StatCard
              icon={<IconSettings className="w-6 h-6" />}
              label="Categories"
              value="30+"
            />
            <StatCard
              icon={<IconGlobe className="w-6 h-6" />}
              label="Frameworks"
              value="3"
              description="React, Vue, Flutter"
            />
            <StatCard
              icon={<IconDownload className="w-6 h-6" />}
              label="Weekly Downloads"
              value="2M+"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              About Lucide Icons
            </h2>
            <p className="text-gray-600 mb-6">
              Lucide is a beautiful & consistent icon toolkit made by the
              community. It's the successor to Feather Icons, featuring a clean
              and modern design.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Features
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>3,000+ meticulously crafted icons</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Fully open source (MIT licensed)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>TypeScript support included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Customizable size, color, and stroke width</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Installation
                </h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <code className="text-sm text-gray-800">
                    npm install lucide-react
                  </code>
                </div>
                <p className="text-sm text-gray-500">
                  Also available for Vue, Svelte, Solid, and more.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Documentation Link */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Need more details?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Visit the official Lucide documentation for complete usage guides,
              API references, and interactive examples.
            </p>
            <a
              href="https://lucide.dev/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-medium"
            >
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
