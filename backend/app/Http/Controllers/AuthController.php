<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use App\Services\AuthService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    protected AuthService $authService;
    public function __construct(AuthService $authService){
        $this->authService = $authService;
    }

    public function register(RegisterRequest $request) : JsonResponse{
        $data = $request->validated();
        $user = $this->authService->register($data);
        $token = $user->createToken('auth_token')->plainTextToken;
        $cookie = cookie('token',$token,60*24);
        return response()->json([
            'message' => 'Register successfully',
            'user' => $user,
            'token' => $token,
        ])->withCookie($cookie);
    }

    public function login(LoginRequest $request) : JsonResponse{
        $data = $request->validated();
        $user = User::where('email', $data['email'])->first();
        if(!$user || !Hash::check($data['password'], $user->password)){
            return response()->json([
                'message' => 'Email or Password is Incorrect'
            ]);
        }
        $token = $user->createToken('auth_token')->plainTextToken;
        $cookie = cookie('token',$token,60*24);
        return response()->json([
            'message' => 'Login successfully',
            'user' => $user,
            'token' => $token,
        ])->withCookie($cookie);
    }

    public function logout(Request $request) : JsonResponse{
        $request->user()->currentAccessToken()->delete();
        $cookie = cookie()->forget('token');
        return response()->json([
            'message' => 'Logged out successfully!'
        ])->withCookie($cookie);
    }


    public function user(Request $request) : JsonResponse{
        return response()->json([
            'user' =>auth()->user()
        ]);
    }
}
