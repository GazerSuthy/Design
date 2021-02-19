# place markup in order of content hierarchy

    Reason for this is that if css doesn't load through we want user to see the most important informations first like the headings rather than an image alt. It also for accessibility reasons as it guides screen readers through the content hiearchy of the page

    * change layout in css to how you originally designed it using alignments

# Semantics help with accessiblity (a11y)

    Content should have one main with role="main" (in a11y docs)

# When doing css focus on one thing at a time

    Jumping around can get you overwhelemed. Take a minute to think of the general structure and than focus on one aspect such as nav, main, etc. You can refactor if you need to!

    Break you code into sections like typography (dealing with text layout) and Layout dealing with elements

# Don't touch/change markup structure while doing css

    I did markup based on desktop design, and when I was doing mobile I was trying to change structure to fit the mobile structure. Both mobile structure and desktop structure are different! Since the desktop markup is more complicated stick with that as the default html markup and use css to change structure of markup.

# Start with typography when doing css

    Do as much global styles you can such as h1,h2,h3,p etc.
    Groups all font-sizes in one place so you don't have to search for fonts.
    (Always use numbers for font-weights)

# Order when starting a css project

    1) Typography
    2) Big Layout Component
    3) Small Layout Components

    - do markup of the more complicated layout "usually desktop" which is why people do mobile-first to get rearranging the layout out of the way to focus on the more complicated layout

    - avoid overwriting css because small screens are usually much simpiler so we just need a few add ons for media query big screens.

    ex) if we start desktop first we would have widths set for multi columns. We need to rewrite these widths for the small screens that usually have one column.

    If we start mobile first we dont need widths because there is one column. We just need to add the widths to the media query

# Have a generic flex class

    .flex{
        display: flex
        justify-content
    }
    avoids having to write display flex for every element

# imgs

    img{
        max-width: 100%;
        display: block;
    }

    avoids spacing that comes under image because images are inline

    with object-fit you can do object position!

# margins and padding tip

    always go bigger than you think and than scale down. Most of the time you put margins and padding to small.

# Breakpoints

    breakpoints are about layouts not devices. Don't stick to specific sizes, use numbers that ensure your layout doesn't break.
    **The number for breakpoint depends on your specific layout**

# meta tag

    <meta name="viewport" content="width=device-width, initial-scale=1">
    auto included in vscode shortcut
    Prevent's mobiles from zooming out on webpage

# line height (dont use units)

    * First step - base starting point
    body{
        [1.5-1.7]
        line-height:1.6;
    }
    // 1.4 is default

    by having unit less it scales with the text (h1 and p will have different spacing because of the scale)
    which will look more appealing

# Put letter spacing with all caps (visual appeal and makes it easier to read)
