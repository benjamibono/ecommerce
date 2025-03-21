import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/20/solid'

export type SortOption = 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc'

interface ProductFiltersProps {
  selectedSizes: string[]
  onSizeChange: (size: string) => void
  onSortChange: (sort: SortOption) => void
  currentSort: SortOption
}

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
const sortOptions = [
  { value: 'name-asc', label: 'Name (A-Z)' },
  { value: 'name-desc', label: 'Name (Z-A)' },
  { value: 'price-asc', label: 'Price (Low to High)' },
  { value: 'price-desc', label: 'Price (High to Low)' },
] as const

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductFilters({ 
  selectedSizes, 
  onSizeChange, 
  onSortChange,
  currentSort
}: ProductFiltersProps) {
  const sortOption = sortOptions.find(option => option.value === currentSort)?.label || 'Sort by'

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-2 sm:py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
          <div className="flex items-start sm:items-center flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center gap-2 min-w-fit">
              <FunnelIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-medium text-gray-900">Filter by Size:</span>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => onSizeChange(size)}
                  className={`px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium rounded-md ${
                    selectedSizes.includes(size)
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <Menu as="div" className="relative w-full sm:w-auto">
            <Menu.Button className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-x-1.5 rounded-md bg-white px-3 py-2 text-xs sm:text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              <span className="truncate">{sortOption}</span>
              <ChevronDownIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 flex-shrink-0" aria-hidden="true" />
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-full sm:w-48 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <Menu.Item key={option.value}>
                      {({ active }) => (
                        <button
                          onClick={() => onSortChange(option.value)}
                          className={classNames(
                            option.value === currentSort ? 'font-medium text-gray-900' : 'text-gray-500',
                            active ? 'bg-gray-50' : '',
                            'block px-4 py-2 text-sm w-full text-left'
                          )}
                        >
                          {option.label}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  )
} 