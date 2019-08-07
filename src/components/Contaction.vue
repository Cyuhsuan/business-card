<template>
  <div class="contact">
    <form action>
      <h2>this is contact</h2>
      <div class="content">
        <div class="group_input">
          <label for>name</label>
          <input type="text" placeholder="your name" />
          <label for>phone number</label>
          <input type="text" placeholder="your phone number" />
          <label for>E-mail</label>
          <input type="text" placeholder="your e-mail" />
        </div>
        <div>
          <textarea name id cols="30" rows="10"></textarea>
          <button>送出</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
.contact {
  padding: 50px;

  .content {
    width: 100%;
    display: flex;

    textarea {
      resize: none;
    }
  }

  .group_input {
    display: flex;
    flex-direction: column;
    margin: 0 30px 0 0;
  }

  form {
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    width: 50%;
    margin: 0 auto;

    input {
      margin: 0 0 20px;
    }

    h2 {
      width: 50%;
    }
  }
}
</style>

