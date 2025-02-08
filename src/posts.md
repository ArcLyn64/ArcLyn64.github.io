---
layout: default.html
title: Posts

eleventyImport:
    collections: ["posts"]
---

# {{ title }}

{% for post in collections.posts %}
<div>
    <p style="font-size:16px">
        <em> {{ post.data.author }}, {{ post.data.datelbl }} </em>
    </p>
    <a href="{{ post.url }}" style="text-decoration:none">
        <h3 style="border-bottom:none"> {{ post.data.title }} </h3>
    </a>
    <p style="font-size:16px"> {{ post.data.desc }} </p>
</div>
<hr class="post-divider">
{% endfor %}