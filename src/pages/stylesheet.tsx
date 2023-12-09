import Button from '@/components/UI/Button'
import { ButtonVariant } from '@/components/UI/Button/types'
import { NextGetLayout } from '@/types/layout'
import { getDefaultLayout } from '@/utils'
import clsx from 'clsx'
import React from 'react'

type StylesheetpageProps = NextGetLayout

const cardStyle = clsx(`space-y-12 rounded-lg shadow-lg p-12`)
const cardTitle = clsx(`text-7xl`)

const Stylesheetpage: StylesheetpageProps = () => {
  return (
    <section>
      <div className="container">
        <div className="grid min-h-screen grid-cols-1 items-start gap-6 py-6">
          <h1 className={clsx(cardTitle, `text-center`)}>Stylesheet</h1>
          <ColorCard />
          <TypographyCard />
          <ButtonCard />
          <ModalCard />
          <DropDownCard />
          <FormInputCard />
          <PaginationCard />
          <DrawerCard />
          <RatingCard />
          <LightBoxCard />
          <SearchCard />
          <HeaderCard />
          <FooterCard />
        </div>
      </div>
    </section>
  )
}

const ColorCard = () => {
  return (
    <div className={cardStyle}>
      <h2 className={cardTitle}>Color</h2>
      <div className="grid grid-cols-3 gap-16">
        <div>
          <p>Primary</p>
          <div>
            {[
              'bg-orange-50',
              'bg-orange-100',
              'bg-orange-200',
              'bg-orange-300',
              'bg-orange-400',
              'bg-orange-500',
              'bg-orange-600',
              'bg-orange-700',
              'bg-orange-800',
              'bg-orange-900',
            ].map((bgColor) => {
              return (
                <div key={bgColor} className={clsx(`flex h-12 items-center justify-center`, bgColor)}>
                  <p className={clsx(`text-center text-black`)}>{bgColor}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div>
          <p>Dark</p>
          <div>
            {[
              'bg-dark-50',
              'bg-dark-100',
              'bg-dark-200',
              'bg-dark-300',
              'bg-dark-400',
              'bg-dark-500',
              'bg-dark-600',
              'bg-dark-700',
              'bg-dark-800',
              'bg-dark-900',
            ].map((bgColor) => {
              return (
                <div key={bgColor} className={clsx(`flex h-12 items-center justify-center`, bgColor)}>
                  <p className={clsx(`text-center text-black`)}>{bgColor}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div>
          <p>Success</p>
          <div>
            {[
              'bg-success-50',
              'bg-success-100',
              'bg-success-200',
              'bg-success-300',
              'bg-success-400',
              'bg-success-500',
              'bg-success-600',
              'bg-success-700',
              'bg-success-800',
              'bg-success-900',
            ].map((bgColor) => {
              return (
                <div key={bgColor} className={clsx(`flex h-12 items-center justify-center`, bgColor)}>
                  <p className={clsx(`text-center text-black`)}>{bgColor}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div>
          <p>Warning</p>
          <div>
            {[
              'bg-warning-50',
              'bg-warning-100',
              'bg-warning-200',
              'bg-warning-300',
              'bg-warning-400',
              'bg-warning-500',
              'bg-warning-600',
              'bg-warning-700',
              'bg-warning-800',
              'bg-warning-900',
            ].map((bgColor) => {
              return (
                <div key={bgColor} className={clsx(`flex h-12 items-center justify-center`, bgColor)}>
                  <p className={clsx(`text-center text-black`)}>{bgColor}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div>
          <p>Error</p>
          <div>
            {[
              'bg-error-50',
              'bg-error-100',
              'bg-error-200',
              'bg-error-300',
              'bg-error-400',
              'bg-error-500',
              'bg-error-600',
              'bg-error-700',
              'bg-error-800',
              'bg-error-900',
            ].map((bgColor) => {
              return (
                <div key={bgColor} className={clsx(`flex h-12 items-center justify-center`, bgColor)}>
                  <p className={clsx(`text-center text-black`)}>{bgColor}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div>
          <p>Info</p>
          <div>
            {[
              'bg-info-50',
              'bg-info-100',
              'bg-info-200',
              'bg-info-300',
              'bg-info-400',
              'bg-info-500',
              'bg-info-600',
              'bg-info-700',
              'bg-info-800',
              'bg-info-900',
            ].map((bgColor) => {
              return (
                <div key={bgColor} className={clsx(`flex h-12 items-center justify-center`, bgColor)}>
                  <p className={clsx(`text-center text-black`)}>{bgColor}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

const TypographyCard = () => {
  return (
    <div className={cardStyle}>
      <h2 className={cardTitle}>Typography</h2>
      <div className="grid grid-cols-2">
        <div className="flex flex-col space-y-6">
          <span className="text-header-1">Header 1</span>
          <span className="text-header-2">Header 2</span>
          <span className="text-header-3">Header 3</span>
          <span className="text-header-4">Header 4</span>
          <span className="text-header-5">Header 5</span>
          <span className="text-header-6">Header 6</span>
          <span className="text-header-7">Header 7</span>
        </div>
        <div className="flex flex-col space-y-6">
          <span className="text-body-24">Text 24</span>
          <span className="text-body-20">Text 20</span>
          <span className="text-body-18">Text 18</span>
          <span className="text-body-16">Text 16</span>
          <span className="text-body-14">Text 14</span>
          <span className="text-body-12">Text 12</span>
          <span className="text-body-10">Text 10</span>
        </div>
      </div>
    </div>
  )
}

const ButtonCard = () => {
  return (
    <div className={cardStyle}>
      <h2 className={cardTitle}>Button</h2>
      <div className="grid grid-cols-3 gap-x-4 gap-y-8">
        {[
          'primary',
          'primary-outline',
          'primary-invert',
          'success',
          'success-outline',
          'success-invert',
          'warning',
          'warning-outline',
          'warning-invert',
          'error',
          'error-outline',
          'error-invert',
          'info',
          'info-outline',
          'info-invert',
        ].map((e) => {
          // replace -> คำสั่งสำหรับแทนที่ข้อความเก่า ด้วยข้อความใหม่ รับ argument 2 ค่า คือ
          // 1.ข้อความที่ต้องการแทนที่ 2.ข้อความใหม่ที่จะนำมาแทนที่
          const variant = e.replace('-outline', '').replace('-invert', '') as ButtonVariant

          return (
            <div key={`button-${e}`} className="space-y-4">
              <span className="text-body-24">{e}</span>

              <div className="grid grid-cols-3 items-center">
                {/* Default */}
                <div>Default</div>
                <div>
                  <Button variant={variant}>Button</Button>
                </div>
                <div></div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const ModalCard = () => {
  return (
    <div className={cardStyle}>
      <h2 className={cardTitle}>Modal</h2>
    </div>
  )
}

const DropDownCard = () => {
  return (
    <div className={cardStyle}>
      <h2 className={cardTitle}>DropDown</h2>
    </div>
  )
}

const FormInputCard = () => {
  return (
    <div className={cardStyle}>
      <h2 className={cardTitle}>Button</h2>
    </div>
  )
}

const PaginationCard = () => {
  return (
    <div className={cardStyle}>
      <h2 className={cardTitle}>Pagination</h2>
    </div>
  )
}

const DrawerCard = () => {
  return (
    <div className={cardStyle}>
      <h2 className={cardTitle}>Drawer</h2>
    </div>
  )
}

const RatingCard = () => {
  return (
    <div className={cardStyle}>
      <h2 className={cardTitle}>Rating</h2>
    </div>
  )
}

const LightBoxCard = () => {
  return (
    <div className={cardStyle}>
      <h2 className={cardTitle}>LightBox</h2>
    </div>
  )
}

const SearchCard = () => {
  return (
    <div className={cardStyle}>
      <h2 className={cardTitle}>Search</h2>
    </div>
  )
}

const HeaderCard = () => {
  return (
    <div className={cardStyle}>
      <h2 className={cardTitle}>Header</h2>
      <div>Header</div>
      <div>Header list menu</div>
      <div>Header long</div>
      <div>Header sticky</div>
      <div>Header Fixed</div>
    </div>
  )
}

const FooterCard = () => {
  return (
    <div className={cardStyle}>
      <h2 className={cardTitle}>Footer</h2>
      <div>Footer copyright</div>
      <div>Footer address , something... , copyright</div>
    </div>
  )
}

Stylesheetpage.getLayout = getDefaultLayout

export default Stylesheetpage
