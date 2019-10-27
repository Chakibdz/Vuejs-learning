<template>
    <div class="container">
        <div v-for="question in questions" :key="question" class="question-box">
            <h3 @click="question.open = !question.open">
                {{ question.titel }}
            </h3>
            <div v-show="question.open" class="response">
                <p>{{ question.reply }}</p>
            </div>
        </div>
    </div>
</template>

<script>
var questions = {
    'Question one': {
        open: true,
        titel: 'One: Bla bla bla',
        reply: 'lorem lorm lorem loerm lorem'
    },
    'Question two': {
        open: false,
        titel: 'Two: Bla bla bla',
        reply: 'lorem lorm lorem loerm lorem'
    },
    'Question three': {
        open: false,
        titel: 'Three: Bla bla bla',
        reply: 'lorem lorm lorem loerm lorem'
    },
    'Question four': {
        open: false,
        titel: 'Four: Bla bla bla',
        reply: 'lorem lorm lorem loerm lorem'
    },
    'Question five': {
        open: false,
        titel: 'Five: Bla bla bla',
        reply: 'lorem lorm lorem loerm lorem'
    }
}
export default {
    name: 'Faq',
    data: function() {
        return {
            questions: questions
        }
    }
}
</script>

<style scoped>
.question-box {
    width: 80%;
    margin: auto;
    margin-top: 50px;
    text-align: left;
}
.question-box h3 {
    cursor: pointer;
    margin: 0;
    padding: 15px;
    background-color: #dfdfdf;
}
.question-box .response {
    background-color: #fff;
    padding: 15px;
}
</style>
