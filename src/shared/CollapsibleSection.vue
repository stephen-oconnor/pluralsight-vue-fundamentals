<template>
  <div>
    <div class="header">
      <span v-if="open" @click="open = !open">&#x25B2; Collapse</span>
      <span v-if="!open" @click="open = !open">&#x25BC; Expand</span>
    </div>
    <!-- Content in-between the opening and closing tags of this component will display here. -->
    <slot v-if="open"></slot>
  </div>
</template>

<script>
export default {
  name: 'CollapsableSection',
  data() {
    return {
      open: true,
    };
  },
};
</script>

<style scoped>
.header {
  background-color: #bbb;
  padding: 3px;
  cursor: pointer;
}
</style>
