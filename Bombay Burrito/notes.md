# add a background-color along with background-image

    if the background image doesn't load in, the background color will act  as a decoration which will allow user's to see text since background color will have similar contrast as background image

# when designing breakpoints make sure the width of the paragraph doesn't get to long, it makes it less inviting to read

# box-sizing: border-box

    When you set total widths of a content it is including the border and the padding of the content with the actual width.

    By default when you set a width the total width is adding the padding and border onto the original width.

    * makes calculating total sizes alot easier

# css selectors

    .intro * {  -> all the elements in the intro section

    }
    .intro > * { -> all the elements that are a direct child

    }

    ex of direct child:
    <div class intro>
        <h1>
            <strong>"Gazer Suthy"</strong>
        <h1>
        <p>hee</p>
    </div>

    both h1 and p are direct child of intro because nested in first layer. Strong is not a direct child because is nested in h1

# viewport units and heights

    if the height of the parent is changing (meaning not fixed size) the child cannot use percentages for heights since the height will change based on screen size.

    * Use viewport units to set heights because other units will cause overlapping elements
