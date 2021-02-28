# Form labels

    to link a label and an input
    // for and id are same value, browser links both label and input
    <label for="fname">
    <input id="fname">

    <!-- inputs nested in labels are linked, more work to style -->
    <label>
        <input>
    </label>

    if you dont want labels you can use an aria-label for screen readers

    Put method's on forms such as POST

# transitions

    put transitions on original element rather than hover.
    keep around 250ms

    use transform properties like scale instead of manually changing button sizes. Reason is that scale does not affect the flow of the css, only visually get's bigger in browser so browser doesn't need to repaint "most of the time we want the scale to go down after hover"
