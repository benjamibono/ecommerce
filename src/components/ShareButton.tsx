import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ShareIcon } from '@heroicons/react/24/outline'
import { 
  FacebookShareButton, 
  TwitterShareButton, 
  WhatsappShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon
} from 'react-share'

interface ShareButtonProps {
  url: string
  title: string
  description?: string
}

export default function ShareButton({ url, title, description }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    if (typeof navigator.share === 'function') {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        })
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          console.error('Error sharing:', error)
        }
      }
    }
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // If Web Share API is available, use the native share dialog
  if (typeof navigator.share === 'function') {
    return (
      <button
        type="button"
        onClick={handleShare}
        className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        aria-label="Share this product"
      >
        <ShareIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
        Share
      </button>
    )
  }

  // Fallback to dropdown menu for browsers that don't support Web Share API
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        aria-label="Open share menu"
      >
        <ShareIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
        Share
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <FacebookShareButton
                  url={url}
                  title={title}
                  className={`flex w-full items-center px-4 py-2 text-sm ${
                    active ? 'bg-gray-100' : ''
                  }`}
                >
                  <FacebookIcon size={24} round className="mr-2" />
                  Share on Facebook
                </FacebookShareButton>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <TwitterShareButton
                  url={url}
                  title={title}
                  className={`flex w-full items-center px-4 py-2 text-sm ${
                    active ? 'bg-gray-100' : ''
                  }`}
                >
                  <TwitterIcon size={24} round className="mr-2" />
                  Share on Twitter
                </TwitterShareButton>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <WhatsappShareButton
                  url={url}
                  title={title}
                  className={`flex w-full items-center px-4 py-2 text-sm ${
                    active ? 'bg-gray-100' : ''
                  }`}
                >
                  <WhatsappIcon size={24} round className="mr-2" />
                  Share on WhatsApp
                </WhatsappShareButton>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <LinkedinShareButton
                  url={url}
                  title={title}
                  className={`flex w-full items-center px-4 py-2 text-sm ${
                    active ? 'bg-gray-100' : ''
                  }`}
                >
                  <LinkedinIcon size={24} round className="mr-2" />
                  Share on LinkedIn
                </LinkedinShareButton>
              )}
            </Menu.Item>
            <div className="border-t border-gray-100">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleCopyLink}
                    className={`flex w-full items-center px-4 py-2 text-sm ${
                      active ? 'bg-gray-100' : ''
                    }`}
                  >
                    {copied ? (
                      <span className="text-green-600">✓ Copied!</span>
                    ) : (
                      'Copy link'
                    )}
                  </button>
                )}
              </Menu.Item>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
} 