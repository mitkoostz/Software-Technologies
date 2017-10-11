<ul>

<?php for ($i = 1; $i <= 20; $i++ ): ?>

    <?php $scolor = $i % 2 == 0 ? "green" : "blue" ; ?>

    <li> <span style="color:<?= $scolor; ?>"><?= $i;    ?></span></li>

    <?php endfor; ?>

</ul>