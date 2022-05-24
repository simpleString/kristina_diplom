/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
  nodes: {
    Ribosomes: THREE.Mesh;
    Cytoskeleton: THREE.Mesh;
    Vacuole: THREE.Mesh;
    Circle002: THREE.Mesh;
    Circle002_1: THREE.Mesh;
    Sphere013: THREE.Mesh;
    Sphere013_1: THREE.Mesh;
    Vert002: THREE.Mesh;
    Vert002_1: THREE.Mesh;
    Sphere011: THREE.Mesh;
    Sphere011_1: THREE.Mesh;
    Golgi_Apparatus: THREE.Mesh;
    Cell_Membrane: THREE.Mesh;
    Circle001: THREE.Mesh;
    Circle001_1: THREE.Mesh;
    Nuclear_Pore: THREE.Mesh;
    Nucleolus: THREE.Mesh;
    Sphere012: THREE.Mesh;
    Sphere012_1: THREE.Mesh;
    Sphere012_2: THREE.Mesh;
    Circle049: THREE.Mesh;
    Circle049_1: THREE.Mesh;
    Lysosome: THREE.Mesh;
    vn_: THREE.Mesh;
    ['1ob']: THREE.Mesh;
    ['2_vn']: THREE.Mesh;
    ['1_']: THREE.Mesh;
    ['2_']: THREE.Mesh;
  };
  materials: {
    ['4. brown']: THREE.MeshStandardMaterial;
    ['5. orang']: THREE.MeshStandardMaterial;
    ['Material.005']: THREE.MeshStandardMaterial;
    smooth: THREE.MeshStandardMaterial;
    ['5. yellow']: THREE.MeshStandardMaterial;
    ['Material.001']: THREE.MeshStandardMaterial;
    vn: THREE.MeshStandardMaterial;
    ['5. orang.001']: THREE.MeshStandardMaterial;
    ['6. vnut.001']: THREE.MeshStandardMaterial;
    pink: THREE.MeshStandardMaterial;
    ['pink 2']: THREE.MeshStandardMaterial;
    ['2. purple. 1']: THREE.MeshStandardMaterial;
    ['1. obolochka']: THREE.MeshStandardMaterial;
    ['Material.003']: THREE.MeshStandardMaterial;
    ['Material.004']: THREE.MeshStandardMaterial;
    nuk: THREE.MeshStandardMaterial;
    ['1. obolochka.1 ']: THREE.MeshStandardMaterial;
    ['2. purple']: THREE.MeshStandardMaterial;
    ['6. vnut']: THREE.MeshStandardMaterial;
    ['3. red']: THREE.MeshStandardMaterial;
    ['3. red.1 ']: THREE.MeshStandardMaterial;
    ['1. obolochka. 2']: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF('/m.gltf') as unknown as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ribosomes.geometry}
        material={nodes.Ribosomes.material}
        position={[-0.95, 2.25, 3.27]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cytoskeleton.geometry}
        material={materials['5. orang']}
        position={[1.9, 2.18, 1.03]}
        rotation={[1.8, -0.01, -1.82]}
        scale={[0.02, 0.02, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vacuole.geometry}
        material={materials['Material.005']}
        position={[0.78, 2.03, 1.65]}
      />
      <group position={[1.29, 2.61, -2.43]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002.geometry}
          material={materials.smooth}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002_1.geometry}
          material={nodes.Circle002_1.material}
        />
      </group>
      <group position={[2.32, 2.34, 1.52]} scale={0.15}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere013.geometry}
          material={nodes.Sphere013.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere013_1.geometry}
          material={nodes.Sphere013_1.material}
        />
      </group>
      <group position={[-0.58, 2.16, 0.09]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert002.geometry}
          material={materials['5. orang.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert002_1.geometry}
          material={materials['6. vnut.001']}
        />
      </group>
      <group position={[0.39, 2.34, 3.48]} scale={[-0.15, -0.1, -0.15]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere011.geometry}
          material={materials.pink}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere011_1.geometry}
          material={materials['pink 2']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Golgi_Apparatus.geometry}
        material={materials['2. purple. 1']}
        position={[-0.28, 2.42, -1.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cell_Membrane.geometry}
        material={materials['1. obolochka']}
        position={[0, 2.42, -0.41]}
        scale={3.06}
      />
      <group position={[0, 2.42, -0.41]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_1.geometry}
          material={materials['Material.004']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nuclear_Pore.geometry}
        material={nodes.Nuclear_Pore.material}
        position={[-0.56, 3.84, -2.31]}
        rotation={[-0.15, -0.13, -0.3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nucleolus.geometry}
        material={nodes.Nucleolus.material}
        position={[-0.28, 2.61, -1.7]}
        scale={0.68}
      />
      <group position={[-0.28, 2.59, -1.71]} scale={1.46}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere012.geometry}
          material={materials.nuk}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere012_1.geometry}
          material={nodes.Sphere012_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere012_2.geometry}
          material={nodes.Sphere012_2.material}
        />
      </group>
      <group
        position={[0.02, 1.39, 3.95]}
        rotation={[1.73, -0.25, 0.06]}
        scale={[0.19, 0.15, 0.19]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle049.geometry}
          material={nodes.Circle049.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle049_1.geometry}
          material={materials['2. purple']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lysosome.geometry}
        material={materials['6. vnut']}
        position={[-1.27, 2.56, 1.53]}
        scale={0.35}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vn_.geometry}
        material={nodes.vn_.material}
        position={[2.38, 2.46, -1.09]}
        rotation={[-0.02, 0, 0.03]}
        scale={1.26}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['1ob'].geometry}
        material={materials['3. red']}
        position={[2.17, 2.22, 0.44]}
        rotation={[0, 0.11, 0]}
        scale={[0.81, 0.81, 0.81]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['2_vn'].geometry}
        material={materials['3. red.1 ']}
        position={[1.08, 2.3, 3.16]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['1_'].geometry}
        material={materials['1. obolochka. 2']}
        position={[-2.12, 2.37, 0.66]}
        rotation={[-0.69, -1.51, -0.77]}
        scale={[0.92, 0.92, 0.92]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['2_'].geometry}
        material={nodes['2_'].material}
        position={[1.66, 2.27, 2.43]}
        rotation={[-Math.PI, -0.23, 2.94]}
      />
    </group>
  );
}

useGLTF.preload('/m.gltf');
