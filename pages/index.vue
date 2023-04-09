<template>
  <div class="m-20 space-y-4">
    <h3>Buttons</h3>
    <div class="flex space-x-4">
      <baseBtn color="primary">Test Button</baseBtn>
      <baseBtn color="secondary">Test Button</baseBtn>
      <baseBtn color="tertiary">Test Button</baseBtn>
    </div>
    <div class="flex space-x-4">
      <baseBtn color="primary" type="ghost">Test Button</baseBtn>
      <baseBtn color="secondary" type="ghost">Test Button</baseBtn>
      <baseBtn color="tertiary" type="ghost">Test Button</baseBtn>
    </div>
    <h3>Navigation Bars</h3>
    <baseNav color="primary" />
    <h3>Footers</h3>
    <baseFooter color="tertiary" />
    <h3>Toasts</h3>
    <baseToast type="success" message="Your changes have been saved." />
    <baseToast type="warn" message="Your changes have not been saved." />
    <baseToast type="error" message="There has been an error." />
    <h3>Tags</h3>
    <baseTag />
    <h3>Tag Groups</h3>
    <baseTagGroup />
    <h3>Inputs</h3>
    <baseInput label="Input Label" placeholder="enter email"/>
    <baseInputBtn />
  </div>
</template>
