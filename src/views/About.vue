<template>
    <div class="about">
        <h1>This is an about page</h1>
        <WelcomeMessage />
        <NewTest />
        <ContactPage />
    </div>
</template>
<script>
// @ is an alias to /src
import WelcomeMessage from "@/components/WelcomeMessage.vue";
import NewTest from "@/components/NewTest.vue";
import ContactPage from "@/components/global/contact.vue";
export default {
    name: "About",
    components: {
        WelcomeMessage,
        NewTest,
        ContactPage
    }
};
</script>
