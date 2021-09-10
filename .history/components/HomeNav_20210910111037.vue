<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <div class="top-part">
      <div class="phone">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="612px"
          height="612px"
          viewBox="0 0 612 612"
          style="enable-background: new 0 0 612 612"
          xml:space="preserve"
          fill="#f1ddb5"
        >
          <g>
            <path
              d="M339.296,19.573c-92.187,0-173.778,46.021-223.165,116.25c10.221,6.668,20.184,15.812,29.82,27.567
		c36.844-55.091,96.417-93.743,165.344-102.052l27.997,47.377l27.997-47.378c105.952,12.769,190.17,96.983,202.945,202.934
		l-47.385,28.001l47.386,28.002c-8.54,70.836-49.108,131.821-106.661,168.372c3.666,8.357,5.731,16.902,6.096,25.712
		c0.269,6.438-0.395,12.521-1.73,18.296C553.609,486.622,612,396.153,612,292.277C612,141.904,489.669,19.573,339.296,19.573z
		 M408.887,468.69c-62.865-50.523-80.444-25.688-108.968,2.832c-19.914,19.921-70.308-21.678-113.821-65.193
		c-43.516-43.521-85.107-93.907-65.195-113.824c28.526-28.521,53.354-46.11,2.817-108.958
		c-50.52-62.871-84.198-14.603-111.829,13.03c-31.9,31.889-1.681,150.726,115.769,268.194
		c117.466,117.452,236.302,147.651,268.183,115.774C423.471,552.911,471.753,519.237,408.887,468.69z M217.426,334.954
		c0-55.88,65.42-65.835,65.42-87.641c0-10.581-8.47-15.023-16.304-15.023c-14.397,0-22.434,16.083-22.434,16.083l-27.521-18.415
		c0,0,13.973-32.6,53.346-32.6c24.766,0,51.65,14.185,51.65,46.36c0,47.208-60.968,56.314-62.028,75.789h64.36v31.751H219.123
		C218.062,345.332,217.426,340.043,217.426,334.954z M339.391,292.199l58.434-92.305h45.301v84.047h17.991v30.691h-17.991v36.628
		h-36.628v-36.628h-67.106V292.199L339.391,292.199z M406.497,283.94v-33.871c0-8.258,1.272-16.94,1.272-16.94h-0.424
		c0,0-3.171,9.318-7.41,15.669l-22.857,34.72v0.424L406.497,283.94L406.497,283.94z"
            />
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>

        <span>+421 255 968 922</span>
      </div>
      <div class="mobile" @click="toggleNav()">
        <span class="line" :class="{ active: mobile }"></span>
        <span class="line" :class="{ active: mobile }"></span>
        <span class="line" :class="{ active: mobile }"></span>
      </div>
      <div class="logo">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 231.5 58.4"
          style="enable-background: new 0 0 231.5 58.4"
          xml:space="preserve"
        >
          <style v-if="!scrolledNav" type="text/css">
            .st0 {
              fill: #fff;
            }
          </style>
          <style v-else type="text/css">
            .st0 {
              fill: #ddc38e;
            }
          </style>
          <polygon
            class="st0"
            points="13,29.4 16.2,27.1 19.4,29.4 18.2,25.6 21.4,23.3 17.4,23.3 16.2,19.5 15,23.3 11,23.3 14.2,25.6 "
          />
          <polygon
            class="st0"
            points="50.3,29.4 53.5,27.1 56.7,29.4 55.5,25.6 58.7,23.3 54.7,23.3 53.5,19.5 52.3,23.3 48.3,23.3 
	51.5,25.6 "
          />
          <polygon
            class="st0"
            points="25.4,29.4 28.6,27.1 31.9,29.4 30.6,25.6 33.8,23.3 29.9,23.3 28.6,19.5 27.4,23.3 23.4,23.3 
	26.6,25.6 "
          />
          <polygon
            class="st0"
            points="37.9,29.4 41.1,27.1 44.3,29.4 43.1,25.6 46.3,23.3 42.3,23.3 41.1,19.5 39.9,23.3 35.9,23.3 
	39.1,25.6 "
          />
          <path
            class="st0"
            d="M80.6,25.2h10.2l-4.2,7c-1.7,2.7-3.1,4.4-4.3,5c-1,0.5-3.2,0.9-6.5,1.1c-0.2,0-0.3,0.1-0.3,0.3
	c0,0.2,0.1,0.3,0.3,0.3h20.9c0.2,0,0.4-0.1,0.4-0.3c0-0.2-0.1-0.3-0.4-0.3l-1.3-0.1c-1.2,0-2.4,0-3.6-0.1c-1.7-0.2-2.5-0.7-2.5-1.6
	c0-0.7,0.6-2,1.7-3.8l19.2-31c-5.2,2.5-10.5,5.9-15.9,10.2c-4,3.2-8.7,7.3-14.1,12.6H64.8c-0.4,0-0.6,0.1-0.6,0.3
	c0,0.2,0.2,0.4,0.6,0.4h14.8c-3.9,3.9-6.9,6.9-8.8,8.9C64,40.8,57.7,45.7,51.6,49c-7.5,4.1-15.3,6.2-23.3,6.2
	C23,55.1,18,54,13.3,51.9C8,49.4,4.2,46.1,1.8,41.7c-0.7-1.2-1.1-1.9-1.2-1.9c-0.4,0-0.6,0.2-0.6,0.5c0,0.3,0.1,0.6,0.4,0.9
	c0.2,0.3,0.5,0.5,0.7,0.8c3,3.8,5.2,6.2,6.6,7.4c2.1,1.8,5.1,3.3,8.9,4.5c3.7,1.2,7.6,1.9,11.9,1.9c7.2,0,14-1.6,20.4-4.6
	c5.2-2.5,10.6-6.3,16.5-11.5C65.6,39.7,70.6,34.8,80.6,25.2 M91.2,15.2c4.5-3.9,8.1-6.5,10.8-8L91.3,24.5H81.1
	C84.1,21.5,87.4,18.4,91.2,15.2"
          />
          <path
            class="st0"
            d="M204.3,25.4c-1.4-0.8-2.9-1.2-4.6-1.2c-3.2,0-6.1,0.9-8.8,2.7c-3,2.1-4.4,4.6-4.4,7.6c0,1.6,0.7,2.9,2.2,3.7
	c1.2,0.7,2.6,1.1,4.3,1.1c3.2,0,6.2-0.9,8.9-2.6c3.2-2,4.7-4.5,4.7-7.5C206.7,27.6,205.9,26.3,204.3,25.4 M199.5,34.9
	c-2.5,2.5-5,3.7-7.4,3.7c-0.7,0-1.2-0.3-1.6-0.9c-0.4-0.6-0.6-1.3-0.6-2c0-2.4,1.2-4.7,3.7-7.2c2.4-2.4,4.9-3.6,7.2-3.6
	c0.7,0,1.3,0.2,1.8,0.8c0.4,0.5,0.7,1.2,0.7,1.9C203.2,30,202,32.5,199.5,34.9"
          />
          <path
            class="st0"
            d="M230.9,3.1C227.4,1,223.6,0,219.5,0c-3.3,0-6.6,0.5-9.8,1.5c-2.6-1-5.3-1.5-8.2-1.5c-8.3,0-16.4,3.2-24.5,9.6
	c-3.8,3-7.7,7-11.6,11.8c-1.6,2-4.9,6.4-9.9,13.3c-1.1,1.4-2.1,2.4-3.2,2.8c-0.8,0.3-2.5,0.6-5,0.8c-0.2,0-0.3,0.1-0.3,0.4
	c0,0.2,0.1,0.3,0.3,0.3h15c0.2,0,0.3-0.1,0.3-0.3c0-0.2-0.1-0.3-0.3-0.3c-0.8-0.1-1.6-0.1-2.4-0.2c-1.2-0.1-1.8-0.4-1.8-0.9
	c0-0.1,0-0.2,0.1-0.3c5-9.1,10.9-16.9,17.8-23.5c8.8-8.4,17.3-12.7,25.5-12.7c1.6,0,3.3,0.2,5.2,0.6c0.8,0.2,1.5,0.3,2.2,0.5
	c-4.6,1.6-9.2,4.1-13.8,7.7c-3.8,3-7.7,7-11.6,11.8c-1.6,2-4.9,6.4-9.9,13.3c-1.1,1.4-2.1,2.4-3.2,2.8c-0.8,0.3-2.5,0.6-5,0.8
	c-0.2,0-0.3,0.1-0.3,0.4c0,0.2,0.1,0.3,0.3,0.3h15c0.2,0,0.3-0.1,0.3-0.3c0-0.2-0.1-0.3-0.3-0.3c-0.8-0.1-1.6-0.1-2.4-0.2
	c-1.2-0.1-1.8-0.4-1.8-0.9c0-0.1,0-0.2,0.1-0.3c5-9.1,10.9-16.9,17.8-23.5c5.6-5.4,11-9,16.4-11c0.4,0.2,0.7,0.4,1,0.6
	c0.1,0,0.3,0.3,0.8,0.8c0.3,0.3,0.5,0.5,0.8,0.5c0.4,0,0.6-0.2,0.6-0.5c0-0.3-0.2-0.5-0.6-0.8c-0.6-0.3-1.2-0.6-1.8-0.9
	c2.8-0.9,5.6-1.4,8.3-1.4c1.6,0,3.3,0.2,5.2,0.6c2.3,0.4,3.9,1,4.8,1.7c0.1,0,0.3,0.3,0.8,0.8c0.3,0.3,0.5,0.5,0.8,0.5
	c0.4,0,0.6-0.2,0.6-0.5C231.5,3.6,231.3,3.3,230.9,3.1"
          />
          <path
            class="st0"
            d="M147.9,29.2c0-1.6-0.8-2.9-2.4-3.9c-1.4-0.8-2.9-1.2-4.6-1.2c-3.2,0-6.1,0.9-8.8,2.7c-3,2.1-4.4,4.6-4.4,7.6
	c0,1.6,0.7,2.9,2.2,3.7c1.2,0.7,2.6,1.1,4.3,1.1c3.2,0,6.2-0.9,8.9-2.6C146.3,34.7,147.9,32.2,147.9,29.2 M140.8,34.9
	c-2.5,2.5-5,3.7-7.4,3.7c-0.7,0-1.2-0.3-1.6-0.9c-0.4-0.6-0.6-1.3-0.6-2c0-2.4,1.2-4.7,3.7-7.2c2.5-2.4,4.9-3.6,7.2-3.6
	c0.7,0,1.3,0.2,1.8,0.8c0.4,0.5,0.7,1.2,0.7,1.9C144.5,30,143.3,32.5,140.8,34.9"
          />
          <path
            class="st0"
            d="M123.6,25.1c-0.9-0.6-1.9-1-3.1-1c-2.4,0-4.9,1.2-7.5,3.7c0.1-0.4,0.1-0.7,0.1-1c0-1.5-1.2-2.3-3.6-2.3
	c-0.6,0-2.3,0.2-5.3,0.6c-0.2,0-0.3,0.2-0.3,0.4c0,0.2,0.1,0.3,0.3,0.3c0.5,0,1.3-0.1,2.3-0.3c1-0.2,1.8-0.3,2.3-0.3
	c0.9,0,1.3,0.3,1.3,0.9c0,1.4-4.6,7.9-13.8,19.3c-2.8,3.6-6,6.4-9.3,8.4c-3.9,2.4-7.8,3.6-11.8,3.6c-2.2,0-4.4-0.4-6.6-1.3
	c-2.5-1-4.3-2.3-5.1-4c-0.1-0.3-0.3-0.7-0.4-1c-0.2-0.5-0.4-0.7-0.7-0.7c-0.3,0-0.5,0.2-0.5,0.6c0,0.3,0.3,0.8,1,1.6
	c2.9,3.7,7.1,5.5,12.6,5.5c6.5,0,12.7-2.4,18.7-7.3c3.7-3,8.3-8.1,14-15.2c0.2,2.4,1.8,3.7,4.7,3.7c2.7,0,5.4-1.2,8.1-3.7
	c2.6-2.4,4-5,4-7.8C125,26.8,124.6,25.8,123.6,25.1 M118.2,34.2c-2.4,2.7-4.7,4.1-6.6,4.1c-0.6,0-1.2-0.2-1.6-0.7
	c-0.4-0.5-0.6-1.1-0.6-1.7c0-2.1,1.2-4.3,3.7-6.9c2.5-2.5,4.8-3.8,6.8-3.8c0.6,0,1,0.2,1.4,0.6c0.4,0.4,0.6,0.9,0.6,1.4
	C121.8,29.1,120.6,31.4,118.2,34.2"
          />
          <polygon
            class="st0"
            points="150.2,52 145.4,52 145.4,47.7 143.6,47.7 143.6,58.1 145.4,58.1 145.4,53.6 150.2,53.6 150.2,58.1 
	151.9,58.1 151.9,47.7 150.2,47.7 "
          />
          <path
            class="st0"
            d="M160.1,47.4c-3.3,0-5.2,2.2-5.2,5.4c0,3.2,1.5,5.6,5,5.6c3.4,0,5.1-2.1,5.1-5.7
	C165.1,49.5,163.1,47.4,160.1,47.4 M160.1,56.9c-2.8,0-3.3-2.4-3.3-4.3c0-2.3,1.1-3.6,3.1-3.6c2.4,0,3.3,1.6,3.3,4.1
	C163.2,55.3,162.2,56.9,160.1,56.9"
          />
          <polygon
            class="st0"
            points="166.5,49.2 169.9,49.2 169.9,58.1 171.7,58.1 171.7,49.2 175.1,49.2 175.1,47.7 166.5,47.7 "
          />
          <polygon
            class="st0"
            points="179.3,53.5 183,53.5 183,52 179.3,52 179.3,49.2 183.8,49.2 183.8,47.7 177.5,47.7 177.5,58.1 
	184.1,58.1 184.1,56.6 179.3,56.6 "
          />
          <polygon
            class="st0"
            points="188.8,47.7 187,47.7 187,58.1 193.4,58.1 193.4,56.6 188.8,56.6 "
          />
        </svg>
      </div>
      <div class="language">
        <span>{{ lang }}</span>
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 213.333 213.333"
          style="enable-background: new 0 0 213.333 213.333"
          xml:space="preserve"
          fill="#fff"
        >
          <g>
            <g>
              <polygon points="0,53.333 106.667,160 213.333,53.333 		" />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
        <div class="choose">
          <span @click="chanegeLang(secondLang, 2)">{{ secondLang }}</span>
          <span @click="chanegeLang(thirdLang, 3)">{{ thirdLang }}</span>
        </div>
      </div>
    </div>
    <div class="down-part">
      <NuxtLink class="" to="/">domov</NuxtLink>
      <NuxtLink class="" to="/ubytovanie">ubytovanie</NuxtLink>
      <NuxtLink class="" to="/rezervacia">rezervácia</NuxtLink>
      <NuxtLink class="" to="/parkovanie">parkovanie</NuxtLink>
      <NuxtLink class="" to="/restauracia">reštaurácia sv.Huberta</NuxtLink>
      <NuxtLink class="" to="/eventy">konferenice a eventy</NuxtLink>
      <NuxtLink class="" to="/wellness">wellness</NuxtLink>
      <NuxtLink class="" to="/galeria">galéria</NuxtLink>
      <NuxtLink class="" to="/kontakt">kontakt</NuxtLink>
    </div>
    <div class="mobile-menu" :class="{ active: mobile }">
      <NuxtLink @click="toggleNav()" to="/">domov</NuxtLink>
      <NuxtLink @click="toggleNav()" to="/ubytovanie">ubytovanie</NuxtLink>
      <NuxtLink @click="toggleNav()" to="/rezervacia">rezervácia</NuxtLink>
      <NuxtLink @click="toggleNav()" to="/parkovanie">parkovanie</NuxtLink>
      <NuxtLink @click="toggleNav()" to="/restauracia"
        >reštaurácia sv.Huberta</NuxtLink
      >
      <NuxtLink @click="toggleNav()" to="/eventy"
        >konferenice a eventy</NuxtLink
      >
      <NuxtLink @click="toggleNav()" to="/wellness">wellness</NuxtLink>
      <NuxtLink @click="toggleNav()" to="/galeria">galéria</NuxtLink>
      <NuxtLink @click="toggleNav()" to="/kontakt">kontakt</NuxtLink>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      lang: 'SK',
      secondLang: 'EN',
      thirdLang: 'DE',
      mobile: false,
      scrolledNav: null,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.upatadeScroll)
  },
  methods: {
    chanegeLang(lang, order) {
      this.lang = lang
      if (order === 2) {
        this.secondLang = 'SK'
      }
    },
    toggleNav() {
      this.mobile = !this.mobile
    },
    upatadeScroll() {
      const scrollPosition = window.scrollY
      if (scrollPosition > 50) {
        this.scrolledNav = true
        return
      }
      this.scrolledNav = false
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  background-color: transparent;
  transition: box-shadow 0.5s ease-in-out;
}
.top-part {
  max-width: 1440px;
  padding: 3rem 1rem;
  transition: padding 0.5s ease-in-out;
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: auto;
}
.phone {
  gap: 0.5rem;
  display: flex;
  align-items: center;
  color: #f1ddb5;
  justify-self: start;
  font-weight: 400;
  svg {
    width: 4rem;
    height: 4rem;
  }
  @media only screen and (max-width: 1100px) {
    display: none;
  }
}
.mobile {
  display: none;
  span {
    transition: all 0.3s ease-in-out;
    display: block;
    height: 0.28rem;
    width: 3rem;
    background: var(--heading);
    &:not(:first-child) {
      margin-top: 0.5rem;
    }
    &:nth-child(2) {
      width: 2.5rem;
    }
  }
  .active {
    transition: all 0.3s ease-in-out;
    &:nth-child(1) {
      transform: translateY(0.35rem) rotate(45deg);
      @media only screen and (max-width: 350px) {
        transform: translateY(0.2rem) rotate(45deg);
      }
      @media only screen and (max-width: 277px) {
        transform: translateY(0.35rem) rotate(45deg);
      }
    }
    &:nth-child(2) {
      opacity: 0;
      transform: translateX(-1rem);
    }
    &:nth-child(3) {
      transform: translateY(-1.3rem) rotate(-45deg);
    }
  }
  @media only screen and (max-width: 1100px) {
    display: block;
  }
}
.logo {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  width: 18rem;
  @media only screen and (max-width: 1100px) {
    width: 13rem;
    top: 30%;
  }
  @media only screen and (max-width: 330px) {
    top: 35%;
    width: 10rem;
  }
}
.language {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  cursor: pointer;
  svg {
    width: 1rem;
    height: 1rem;
  }
  span {
    font-weight: 500;
    cursor: pointer;
    color: #fff;
  }
  &:hover .choose {
    span {
      display: block;
    }
  }
  .choose {
    position: absolute;
    top: 100%;
    left: 0%;
    display: flex;
    flex-direction: column;
    span {
      font-weight: 500;
      display: none;
      color: var(--heading);
      transition: color 0.3s ease-in-out;
      &:hover {
        transition: color 0.3s ease-in-out;
        color: #fff;
      }
    }
  }
}
.down-part {
  transition: padding 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding-bottom: 4rem;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
  a {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.3s ease-in-out;
    &:hover {
      transition: color 0.3s ease-in-out;
      color: var(--heading);
    }
  }
  a.nuxt-link-exact-active {
    color: var(--heading);
  }
}
.mobile-menu {
  position: absolute;
  left: -100%;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  font-size: 2rem;
  gap: 2rem;
  background-color: #fff;
  opacity: 0;
  transition: all 0.7s ease-in-out;
  a {
    color: var(--text);
    text-transform: uppercase;
    transition: color 0.3s ease-in;
    &:active {
      transition: color 0.3s ease-in;
      color: var(--heading);
    }
    &:hover {
      transition: color 0.3s ease-in;
      color: var(--heading);
    }
  }
}
.active {
  opacity: 1;
  transition: all 0.7s ease-in-out;
  left: 0%;
}
.scrolled-nav {
  background-color: #fff;
  box-shadow: 0 13px 57px 0 rgb(0 0 0 / 28%);
  transition: box-shadow 0.5s ease-in-out;
  header {
    transition: all 0.5s ease-in-out;
  }
  .top-part {
    transition: padding 0.5s ease-in-out;
    padding: 1.5rem;
  }
  .down-part {
    transition: padding 0.5s ease-in-out;
    padding-bottom: 1.5rem;
  }
  .logo {
    transition: all 0.5s ease-in-out;
    top: 15%;
  }
  a {
    color: var(--text);
  }
  span {
    color: var(--text);
  }
  #Capa_1 {
    fill: var(--text);
  }
  .phone {
    span {
      color: var(--heading);
    }
  }
}
</style>
