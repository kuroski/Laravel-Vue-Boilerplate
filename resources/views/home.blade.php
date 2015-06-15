<!DOCTYPE html>
<html lang="pt-BR">
 
<head>
 
    <meta charset="utf-8">
    <meta id="token" value="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
 
    <title>Vue</title>
 
 
    <link href="{{ asset('assets/css/all.css') }}" rel="stylesheet">
 
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
 
</head>
 
<body>
    
    <div id="wrapper">
        <div id="app"></div>
    </div>
    <!-- /#app -->
 
 
    <script src="{{ asset('assets/js/all.js') }}"></script>
    <script src="{{ asset('assets/vue/main.js') }}"></script>
    @yield('js')
 
</body>
 
</html>