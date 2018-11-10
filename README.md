# Deprecated
This can easily be replaced by the following:

```js
let template = document.createElement('template')
template.innerHTML = `<style>
  :host{
    …
  }
</style>
<slot></slot>
`
// in your web component
shadowRoot.appendChild(document.importNode(template.content, true))

```

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
