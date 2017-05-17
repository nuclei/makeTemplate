# make-template
> Create a template node from a template string

## install

```
$ npm install make-template
```

## usage
```Javascript
let template = makeTemplate`<style>
    div{
      color: blue;
    }
  </style>
  <div>Some text</div>`

console.log(template) // <template>…</template>
```
