<template>
  <div class="dropdown" v-click-outside="closeDropDown">
    <button @click="toggleDropDown" class="dropBtn">
      {{ value }}

      <i :class="['fa-solid fa-chevron-up', { 'fa-rotate-180': !isOpen }]"></i>
    </button>

    <ul v-show="isOpen" class="list-group" id="items-list" ref="itemsList" @scroll="handleScroll">
      <li class="list-group-item" v-for="(item, index) in limitedItems" :key="index" @click="clickItem(item)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
  import "@fortawesome/fontawesome-free/css/all.css";

  export default {
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        isOpen: false,
        limitationList: 20,
        value: this.items[0]
      };
    },
    computed: {
      limitedItems() {
        return this.items.filter((item, index) => index < this.limitationList);
      }
    },
    methods: {
      handleScroll() {
        const listElm = this.$refs.itemsList;
        if (
          listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight &&
          this.items.length > this.limitationList
        ) {
          this.loadItems();
        }
      },
      toggleDropDown() {
        this.isOpen = !this.isOpen;
      },
      loadItems() {
        this.loading = true;
        this.limitationList += 20;
        setTimeout(() => (this.loading = false), 200);
      },
      clickItem(item) {
        if (item === this.value) {
          this.isOpen = false;
          return false;
        }

        this.$emit("select", item);
        this.isOpen = false;
        this.value = item;
      },
      closeDropDown() {
        this.isOpen = false;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .dropdown {
    position: relative;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: flex;

    .list-group {
      position: absolute;
      bottom: -380%;
      right: 0;
      overflow: auto;
      border: 1px solid rgba(255, 255, 255, 0.4);
      border-radius: 2px;
      width: 100%;
    }

    .list-group-item {
      @include center;
      padding: 5px;
      margin-top: 1px;
      border-left: none;
      border-right: none;
      border-top: none;
      color: $secondary;
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
      cursor: pointer;
      opacity: 1;

      &:hover {
        opacity: 0.7;
      }
    }

    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.5s;
    }

    .fade-enter,
    .fade-leave-to {
      opacity: 0;
    }

    .dropBtn {
      border: none;
      border-radius: 2px;
      color: #ffffff;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      cursor: pointer;
      background: none;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
</style>
