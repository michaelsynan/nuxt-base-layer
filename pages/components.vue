<template>
  <div class="flex flex-col space-y-6 m-4 md:m-10">
    <div class="flex items-center space-x-4 flex-wrap gap-y-4">
      <btn type="flat" size="lg" />
      <btn type="raised" />
      <btn type="ghost" size="base" />
      <btn type="hard-shadow" size="sm" />
    </div>
    <the-navbar />
    <the-footer />
    <toast type="success" message="Your changes have been saved." />
    <tag />
    <menuDropdown />
    <theDropdown />
    <div class="flex items-center space-x-4 flex-wrap gap-y-4">
      <div class="flex-none">
        <justemail />
      </div>
      <div class="flex-none">
        <contactForm />
      </div>
    </div>
  </div>
</template>
