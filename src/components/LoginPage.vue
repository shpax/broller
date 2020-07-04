<template>
  <div>
    <NavBar />
    <div class="row side-pad col-12-mobile">
      <div class="left-pad col">
        <div class="card">
          <div class="card text-center">
            <div class="card-body">
              <h1 class="card-title">Твой уровень:</h1>
              <div class="gradient">
                <p
                  class="card-text"
                  style="font-family: 'Modak', cursive; font-size: 60px"
                >
                  3
                </p>
              </div>
            </div>
          </div>
          <div class="card text-center">
            <div class="card-body">
              <h1 class="card-title">4 ачивки до:</h1>
              <div class="gradient">
                <p
                  class="card-text"
                  style="font-family: 'Modak', cursive; font-size: 60px"
                >
                  SUPER-BRO
                </p>
              </div>

              <a href="#" class="btn btn-primary">Перейти к плейлисту</a>
            </div>
          </div>
        </div>
      </div>
      <div class="right-pad col">
        <div>
          <b-tabs content-class="mt-3">
            <b-tab no-body title="Level 1">
              <div class="row">
                <div class="col">
                  <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/300/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                    @click="show"
                  >
                    <modal
                      name="hello-world"
                      padding="25px"
                      height="auto"
                      :scrollable="true"
                    >
                      <div style="margin:30px;">
                        <h5>One Wheel Front</h5>
                        <hr />
                        <img
                          src="data:image/jpeg;base64,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"
                          alt=""
                          srcset=""
                        />
                        <p>ЗДесь будет какая-то информация</p>
                        <hr />
                        <h5>Tooltips in a modal</h5>
                        <p>
                          <a href="#" class="tooltip-test" title="Tooltip"
                            >This link</a
                          >
                          and
                          <a href="#" class="tooltip-test" title="Tooltip"
                            >that link</a
                          >
                          have tooltips on hover.
                        </p>
                        <b-embed
                          type="iframe"
                          aspect="16by9"
                          src="https://www.youtube.com/embed/A7E7wmPgulk"
                          allowfullscreen
                        ></b-embed>
                      </div>
                    </modal>
                  </b-card>
                  <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/600/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                  </b-card>
                  <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/300/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                  </b-card>
                </div>
                <div class="col">
                  <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/300/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                  </b-card>
                  <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/300/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                  </b-card>
                  <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/300/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                  </b-card>
                </div>
                <div class="col">
                  <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/300/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                  </b-card>
                  <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/300/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                  </b-card>
                  <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/300/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                  </b-card>
                </div>
              </div>
              <b-card-footer>Picture 1 footer</b-card-footer>
            </b-tab>

            <b-tab no-body title="Level 2">
              <b-card-img
                bottom
                src="https://picsum.photos/600/200/?image=25"
                alt="Image 25"
              ></b-card-img>
              <b-card-footer>Picture 2 footer</b-card-footer>
            </b-tab>

            <b-tab no-body title="Level 3">
              <b-card-img
                bottom
                src="https://picsum.photos/600/200/?image=26"
                alt="Image 26"
              ></b-card-img>
              <b-card-footer>Picture 3 footer</b-card-footer>
            </b-tab>

            <b-tab title="Level 4">
              <b-card-title
                >This tab does not have the <code>no-body</code> prop
                set</b-card-title
              >
              <b-card-text>
                Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate
                ex nulla tempor. Laborum consequat non elit enim exercitation
                cillum aliqua consequat id aliqua. Esse ex consectetur mollit
                voluptate est in duis laboris ad sit ipsum anim Lorem.
                Incididunt veniam velit elit elit veniam Lorem aliqua quis
                ullamco deserunt sit enim elit aliqua esse irure.
              </b-card-text>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";

export default {
  name: "LoginPage",
  components: {
    NavBar
  },
  methods: {
    show() {
      this.$modal.show("hello-world");
    },
    hide() {
      this.$modal.hide("hello-world");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.side-pad {
  margin: auto;
  justify-content: space-around;
}

.left-pad {
  align-self: center;
  margin-bottom: 40px;
}

.gradient {
  background: linear-gradient(#061637, #c8342b);
}
.gradient p {
  color: #000;
  background: #fff;
  mix-blend-mode: lighten;
}

.card {
  border: 0px;
}

.card-body {
  padding: 2px;
}

.card-img-top {
  height: 130px;
}

.mb-2 {
  cursor: pointer;
}

// Mobile version
@media (max-width: 575px) {
  .col-12-mobile {
    display: block;
    padding-right: 5px;
    padding-left: 5px;
  }
  .card-img-top {
    height: 100px;
  }
  h4 {
    font-size: 18px;
    font-weight: 200;
  }
}
</style>
